import { z } from 'zod';

import type { ContractInstance } from '#types/utils';
import type { Permission } from '#utils/security';

export const loginSchema = z.object({
	username: z.string(),
	password: z.string(),
	remember: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
	license: z.string().regex(/^\d+$/),
	email: z.string().email(),
});

export const resetPasswordSchema = z.object({
	password: z.string(),
});

export const authContract = ({ router, type }: ContractInstance) =>
	router({
		login: {
			method: 'POST',
			path: '/auth/login',
			responses: {
				200: z.object({
					uid: z.string(),
					firstname: z.string(),
					lastname: z.string(),
					licenseCode: z.string(),
					permissions: z.array(z.string().transform((value) => value as Permission)),
				}),
				400: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('username').or(z.literal('password')).or(z.literal('remember')),
							message: z.string(),
							meta: z.record(z.string(), z.unknown()),
							rule: z.string(),
						}),
					),
				}),
			},
			body: loginSchema,
		},
		logout: {
			method: 'POST',
			path: '/auth/logout',
			responses: {
				204: z.object({}),
			},
			body: type<never>(),
		},
		check: {
			method: 'GET',
			path: '/auth/check',
			responses: {
				200: z.object({
					uid: z.string(),
					firstname: z.string(),
					lastname: z.string(),
					licenseCode: z.string(),
					permissions: z.array(z.string().transform((value) => value as Permission)),
				}),
				401: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
			},
		},
		forgotPassword: {
			method: 'POST',
			path: '/auth/forgot-password',
			responses: {
				204: z.object({}),
				400: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('license').or(z.literal('email')),
							message: z.string(),
							meta: z.record(z.string(), z.unknown()),
							rule: z.string(),
						}),
					),
				}),
			},
			body: forgotPasswordSchema,
		},
		validateResetPasswordRequest: {
			method: 'GET',
			path: '/auth/reset-password/:token',
			pathParams: z.object({
				token: z.string(),
			}),
			query: z.object({
				signature: z.string(),
			}),
			responses: {
				204: z.object({}),
				400: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
				404: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
			},
		},
		resetPassword: {
			method: 'POST',
			path: '/auth/reset-password/:token',
			pathParams: z.object({
				token: z.string(),
			}),
			query: z.object({
				signature: z.string(),
			}),
			responses: {
				204: z.object({}),
				400: z.object({
					errors: z.array(
						z.object({
							message: z.string(),
						}),
					),
				}),
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('password'),
							message: z.string(),
							meta: z.record(z.string(), z.unknown()),
							rule: z.string(),
						}),
					),
				}),
			},
			body: resetPasswordSchema,
		},
	});
