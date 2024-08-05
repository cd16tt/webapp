import { useForm } from '@tanstack/react-form';
import { createRoute, redirect } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { type FormEvent } from 'react';
import { z } from 'zod';

import { Banner } from '#components/atoms/banner/banner';
import { Button } from '#components/atoms/button/button';
import { Link } from '#components/atoms/button/link';
import { Card } from '#components/atoms/card/card';
import { TextInput } from '#components/forms/text_input/text_input';
import { $AuthLayoutRoute } from '#domains/auth/layouts/auth_layout';
import { apiClient } from '#lib/query_client';
import { isAuthenticated } from '#stores/auth_store';
import { getActiveSpacePath } from '#stores/user_preferences_store';

export const $ForgotPasswordRoute = createRoute({
	getParentRoute: () => $AuthLayoutRoute,
	component: ForgotPassword,
	path: '/auth/forgot-password',
	beforeLoad: () => {
		if (isAuthenticated()) {
			throw redirect({ to: getActiveSpacePath() });
		}
	},
});

function ForgotPassword() {
	const { mutate, isSuccess } = apiClient.auth.forgotPassword.useMutation();
	const form = useForm({
		defaultValues: {
			license: '',
			email: '',
		},
		validatorAdapter: zodValidator(),
		onSubmit: ({ value }) => {
			mutate(
				{
					body: value,
				},
				{
					onError: (error) => {
						if (error.status === 400) {
							for (const apiError of error.body.errors) {
								form.state.errors.push(apiError.message);
							}
							return;
						}

						if (error.status === 422) {
							for (const apiError of error.body.errors) {
								form.state.fieldMeta[apiError.field].errors.push(apiError.message);
							}

							form.state.errors.push('Une erreur est survenue. Veuillez réessayer.');
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
			<h1 className="text-center text-4xl font-semibold font-secondary">Mot de passe oublié</h1>
			<p className="mt-2 text-center text-xl text-neutral-5 font-medium">Comité Charente TT</p>

			<Card className="mt-8 border-2 border-neutral-1 border-solid p-8 shadow-xl">
				{isSuccess ? (
					<>
						<h2 className="text-center text-2xl font-semibold">Demande de réinitialisation confirmée</h2>
						<p className="mt-4 text-center">
							Si l'adresse e-mail correspond bien au compte associé à ce numéro de licence, un email vous a été envoyé pour
							réinitialiser votre mot de passe.
						</p>
						<Link
							href="/auth/login"
							fullWidth
							label="Retour à la page de connexion"
							size="lg"
							intent="brand"
							variant="solid"
							className="mt-4"
						/>
					</>
				) : (
					<>
						<form onSubmit={handleFormSubmit} className="space-y-5">
							<Banner variant="danger" title="Erreur sur le formulaire" messages={form.state.errors.map(String)} />
							<form.Field
								name="license"
								validators={{
									onChange: z.string().regex(/^\d+$/, 'Le numéro de licence doit être un nombre.'),
								}}
								children={(field) => (
									<TextInput
										name={field.name}
										label="Numéro de licence"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(value) => field.handleChange(value)}
										errors={field.state.meta.errors}
										autoFocus
										isRequired
										isInvalid={field.state.value.length > 0 && field.state.meta.errors.length > 0}
									/>
								)}
							/>
							<form.Field
								name="email"
								validators={{
									onChange: z.string().email("L'adresse e-mail doit être valide."),
								}}
								children={(field) => (
									<TextInput
										name={field.name}
										type="email"
										label="Adresse e-mail associée au compte"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(value) => field.handleChange(value)}
										errors={field.state.meta.errors}
										autoFocus
										isRequired
										isInvalid={field.state.value.length > 0 && field.state.meta.errors.length > 0}
										autoComplete="email"
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
										label={isSubmitting ? '...' : "Envoyer l'email de réinitialisation"}
										size="lg"
										intent="brand"
										variant="solid"
									/>
								)}
							/>
						</form>

						<Link
							label="Retour à la connexion"
							href="/auth/login"
							variant="underline"
							intent="brand"
							className="mt-5"
							fullWidth
						/>
					</>
				)}
			</Card>
		</>
	);
}
