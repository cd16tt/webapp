import { useForm } from '@tanstack/react-form';
import { createRoute, redirect } from '@tanstack/react-router';
import { type FormEvent } from 'react';
import { z } from 'zod';

import { Banner } from '#components/atoms/banner/banner';
import { Button } from '#components/atoms/button/button';
import { Link } from '#components/atoms/button/link';
import { Card } from '#components/atoms/card/card';
import { PasswordInput } from '#components/forms/password_input/password_input';
import { isPasswordSafe } from '#components/forms/password_input/password_verification';
import { validatorAdapter } from '#components/forms/validator_adapter';
import { $AuthLayoutRoute } from '#domains/auth/layouts/auth_layout';
import { apiClient } from '#lib/query_client';

export const $ResetPasswordRoute = createRoute({
	getParentRoute: () => $AuthLayoutRoute,
	path: '/auth/reset-password/$token',
	component: ResetPassword,
	validateSearch: z.object({
		signature: z.string(),
	}),
	beforeLoad: async ({ params, search }) => {
		const response = await apiClient.auth.validateResetPasswordRequest.query({
			params,
			query: { signature: search.signature },
		});

		if (response.status !== 204) {
			throw redirect({ to: '/auth/forgot-password' });
		}
	},
});

function ResetPassword() {
	const { mutate, isSuccess } = apiClient.auth.resetPassword.useMutation();
	const { token } = $ResetPasswordRoute.useParams();
	const { signature } = $ResetPasswordRoute.useSearch();
	const form = useForm({
		defaultValues: {
			password: '',
		},
		validatorAdapter,
		onSubmit: ({ value }) => {
			mutate(
				{
					body: value,
					params: {
						token,
					},
					query: { signature },
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
			<h1 className="text-center text-4xl font-semibold font-secondary">Réinitialisation de mot de passe</h1>
			<p className="mt-2 text-center text-xl text-neutral-5 font-medium">Comité Charente TT</p>

			<Card className="mt-8 border-2 border-neutral-1 border-solid p-8 shadow-xl">
				{isSuccess ? (
					<>
						<h2 className="text-center text-2xl font-semibold">Mot de passe réinitialisé avec succès</h2>
						<p className="mt-4 text-center">Veuillez vous connecter avec votre nouveau mot de passe.</p>
						<Link href="/auth/login" fullWidth label="Connexion" size="lg" intent="brand" variant="solid" className="mt-4" />
					</>
				) : (
					<>
						<form onSubmit={handleFormSubmit} className="space-y-5">
							<Banner variant="danger" title="Erreur sur le formulaire" messages={form.state.errors.map(String)} />
							<form.Field
								name="password"
								asyncDebounceMs={1000}
								validators={{
									onChange: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères.'),
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
										autoFocus
										isRequired
										isInvalid={field.state.value.length > 0 && field.state.meta.errors.length > 0}
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
										label={isSubmitting ? '...' : 'Sauvegarder le nouveau mot de passe'}
										size="lg"
										intent="brand"
										variant="solid"
									/>
								)}
							/>
						</form>
					</>
				)}
			</Card>
		</>
	);
}
