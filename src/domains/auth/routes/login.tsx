import type { FormEvent } from 'react';

import { useForm } from '@tanstack/react-form';
import { createRoute, redirect, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';

import { Banner } from '#components/atoms/banner/banner';
import { Button } from '#components/atoms/button/button';
import { Link } from '#components/atoms/button/link';
import { Card } from '#components/atoms/card/card';
import { Checkbox } from '#components/forms/checkbox/checkbox';
import { PasswordInput } from '#components/forms/password_input/password_input';
import { TextInput } from '#components/forms/text_input/text_input';
import { validatorAdapter } from '#components/forms/validator_adapter';
import { $AuthLayoutRoute } from '#domains/auth/layouts/auth_layout';
import { apiClient } from '#lib/query_client';
import { isAuthenticated, useAuthActions } from '#stores/auth_store';
import { getActiveSpacePath, userPreferencesStore } from '#stores/user_preferences_store';

export const $LoginRoute = createRoute({
	getParentRoute: () => $AuthLayoutRoute,
	component: Login,
	path: '/auth/login',
	beforeLoad: () => {
		if (isAuthenticated()) {
			const lastSpaceUsed = userPreferencesStore.getState().lastSpaceUsed;
			throw redirect({ to: `/${lastSpaceUsed}` });
		}
	},
});

function Login() {
	const mutation = apiClient.auth.login.useMutation();
	const { login } = useAuthActions();
	const navigate = useNavigate({ from: '/auth/login' });

	const form = useForm({
		defaultValues: {
			username: '',
			password: '',
			remember: false,
		},
		validatorAdapter,
		onSubmit: ({ value, formApi }) => {
			mutation.mutate(
				{
					body: value,
				},
				{
					onSuccess: (data) => {
						login(data.body);
						void navigate({ to: getActiveSpacePath() });
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
		<>
			<h1 className="text-center text-4xl font-semibold font-secondary">Connexion utilisateur</h1>
			<p className="mt-2 text-center text-xl text-neutral-5 font-medium">Comité Charente TT</p>

			<Card className="mt-8 border-2 border-neutral-1 border-solid p-8 shadow-xl">
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
								label="Nom d'utilisateur"
								value={field.state.value}
								description="Si vous n'avez pas défini de nom d'utilisateur, il s'agit de votre numéro de licence."
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
						name="password"
						validators={{
							onChange: z.string(),
						}}
						children={(field) => (
							<PasswordInput
								name={field.name}
								label="Mot de passe"
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(value) => field.handleChange(value)}
								errors={field.state.meta.errors}
								isRequired
								isInvalid={field.state.meta.errors.length > 0}
							/>
						)}
					/>
					<form.Field
						name="remember"
						validators={{
							onChange: z.boolean().optional(),
						}}
						children={(field) => (
							<Checkbox
								name={field.name}
								isSelected={field.state.value}
								onChange={(value) => field.handleChange(value)}
								label="Se souvenir de moi"
								description="Votre session restera active pendant une semaine."
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
								label={isSubmitting ? '...' : 'Connexion'}
								size="lg"
								intent="brand"
								variant="solid"
							/>
						)}
					/>
				</form>

				<Link
					label="Mot de passe oublié ?"
					href="/auth/forgot-password"
					variant="underline"
					intent="brand"
					className="mt-5"
					fullWidth
				/>
			</Card>
		</>
	);
}
