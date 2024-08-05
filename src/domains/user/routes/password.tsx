import { useForm } from '@tanstack/react-form';
import { createRoute } from '@tanstack/react-router';
import { type FormEvent } from 'react';
import { z } from 'zod';

import { Banner } from '#components/atoms/banner/banner';
import { Button } from '#components/atoms/button/button';
import { PasswordInput } from '#components/forms/password_input/password_input';
import { isPasswordSafe } from '#components/forms/password_input/password_verification';
import { validatorAdapter } from '#components/forms/validator_adapter';
import { $UserLayoutRoute } from '#domains/user/layouts/user_layout';
import { toast } from '#hooks/use_toast';
import { apiClient } from '#lib/query_client';

export const $UserPasswordRoute = createRoute({
	getParentRoute: () => $UserLayoutRoute,
	path: '/u/password',
	component: UserPasswordRoute,
});

function UserPasswordRoute() {
	const mutation = apiClient.auth.updatePassword.useMutation();
	const form = useForm({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
		},
		validatorAdapter,
		onSubmit: ({ value, formApi }) => {
			mutation.mutate(
				{
					body: value,
				},
				{
					onSuccess: () => {
						toast.success({
							title: 'Votre mot de passe a été modifié avec succès.',
							delay: 5000,
						});
						formApi.reset();
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
			<h1 className="mb-8 font-secondary">Modifier mon mot de passe</h1>
			<form onSubmit={handleFormSubmit} className="space-y-5">
				<Banner variant="danger" title="Erreur sur le formulaire" messages={form.state.errors.map(String)} />
				<form.Field
					name="oldPassword"
					validators={{
						onChange: z.string(),
					}}
					children={(field) => (
						<PasswordInput
							name={field.name}
							label="Mot de passe actuel"
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
				<form.Field
					name="newPassword"
					asyncDebounceMs={1000}
					validators={{
						onChange: z.string(),
						onChangeAsync: z.string().refine(isPasswordSafe, {
							message:
								"Ce mot de passe a fait l'objet d'une fuite de données, il ne doit pas être utilisé. Veuillez utiliser un autre mot de passe.",
						}),
					}}
					children={(field) => (
						<PasswordInput
							name={field.name}
							label="Nouveau mot de passe"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(value) => field.handleChange(value)}
							errors={field.state.meta.errors}
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
