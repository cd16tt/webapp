import type { FormEvent } from 'react';

import { useForm } from '@tanstack/react-form';
import { createRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { Banner } from '#components/atoms/banner/banner';
import { Button } from '#components/atoms/button/button';
import { TextInput } from '#components/forms/text_input/text_input';
import { validatorAdapter } from '#components/forms/validator_adapter';
import { $UserLayoutRoute } from '#domains/user/layouts/user_layout';
import { MEDIUM_TOAST_DELAY, toast } from '#hooks/use_toast';
import { apiClient } from '#lib/query_client';
import { useAuthActions } from '#stores/auth_store';

export const $UserUsernameRoute = createRoute({
	getParentRoute: () => $UserLayoutRoute,
	path: '/u/username',
	component: UserUsername,
});

function UserUsername() {
	const mutation = apiClient.auth.updateUsername.useMutation();
	const { login } = useAuthActions();
	const form = useForm({
		defaultValues: {
			username: '',
		},
		validatorAdapter,
		onSubmit: ({ value, formApi }) => {
			mutation.mutate(
				{
					body: value,
				},
				{
					onSuccess: (data) => {
						toast.success({
							title: "Votre nom d'utilisateur a été modifié.",
							delay: MEDIUM_TOAST_DELAY,
						});
						formApi.reset();
						login(data.body);
					},
					onError: (error) => {
						if (error.status === 400) {
							for (const apiError of error.body.errors) {
								formApi.state.errors.push(apiError.message);
							}
							return;
						}

						if (error.status === 422) {
							for (const apiError of error.body.errors) {
								formApi.state.fieldMeta[apiError.field]?.errors.push(apiError.message);
							}

							formApi.state.errors.push('Une erreur est survenue. Veuillez réessayer.');
						}
					},
				},
			);
		},
	});

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		event.stopPropagation();
		void form.handleSubmit();
	};
	return (
		<div className="mx-auto max-w-lg pt-4">
			<h1 className="mb-8 font-secondary">Modifier mon nom d'utilisateur</h1>
			<form onSubmit={handleFormSubmit} className="space-y-5">
				<Banner variant="danger" title="Erreur sur le formulaire" messages={form.state.errors.map(String)} />
				<form.Field
					name="username"
					validators={{
						onChange: z.string(),
					}}
					children={(field) => (
						<TextInput
							name={field.name}
							label="Nom d'utilisateur souhaité"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(value) => field.handleChange(value)}
							errors={field.state.meta.errors}
							autoFocus
							isRequired
							isInvalid={field.state.meta.errors.length > 0}
						/>
					)}
				/>
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
					children={([canSubmit, isSubmitting]) => (
						<Button
							type="submit"
							isDisabled={!canSubmit}
							fullWidth
							label={isSubmitting ? '...' : 'Confirmer la modification'}
							size="lg"
							intent="brand"
							variant="solid"
						/>
					)}
				/>
			</form>
		</div>
	);
}
