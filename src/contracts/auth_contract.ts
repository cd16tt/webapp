import { z } from 'zod';

import {
	BAD_REQUEST_SCHEMA,
	NO_CONTENT_SCHEMA,
	NOT_FOUND_SCHEMA,
	UNAUTHORIZED_SCHEMA,
	VALIDATION_OBJECT,
} from '#contracts/index';
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

export const updatePasswordSchema = z.object({
	oldPassword: z.string(),
	newPassword: z.string(),
});

export const updateUsernameSchema = z.object({
	username: z.string(),
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
				400: BAD_REQUEST_SCHEMA,
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('username').or(z.literal('password')).or(z.literal('remember')),
							...VALIDATION_OBJECT,
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
				204: NO_CONTENT_SCHEMA,
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
				401: UNAUTHORIZED_SCHEMA,
			},
		},
		forgotPassword: {
			method: 'POST',
			path: '/auth/forgot-password',
			responses: {
				204: NO_CONTENT_SCHEMA,
				400: BAD_REQUEST_SCHEMA,
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('license').or(z.literal('email')),
							...VALIDATION_OBJECT,
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
				204: NO_CONTENT_SCHEMA,
				400: BAD_REQUEST_SCHEMA,
				404: NOT_FOUND_SCHEMA,
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
				204: NO_CONTENT_SCHEMA,
				400: BAD_REQUEST_SCHEMA,
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('password'),
							...VALIDATION_OBJECT,
						}),
					),
				}),
			},
			body: resetPasswordSchema,
		},
		updatePassword: {
			method: 'PATCH',
			path: '/auth/password',
			responses: {
				204: NO_CONTENT_SCHEMA,
				400: BAD_REQUEST_SCHEMA,
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('oldPassword').or(z.literal('newPassword')),
							...VALIDATION_OBJECT,
						}),
					),
				}),
			},
			body: updatePasswordSchema,
		},
		updateUsername: {
			method: 'PATCH',
			path: '/auth/username',
			responses: {
				200: z.object({
					uid: z.string(),
					firstname: z.string(),
					lastname: z.string(),
					licenseCode: z.string(),
					permissions: z.array(z.string().transform((value) => value as Permission)),
				}),
				400: BAD_REQUEST_SCHEMA,
				422: z.object({
					errors: z.array(
						z.object({
							field: z.literal('username'),
							...VALIDATION_OBJECT,
						}),
					),
				}),
			},
			body: updateUsernameSchema,
		},
	});
