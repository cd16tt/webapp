import { z } from 'zod';

export const BAD_REQUEST_SCHEMA = z.object({
	errors: z.array(
		z.object({
			message: z.string(),
		}),
	),
});

export const UNAUTHORIZED_SCHEMA = z.object({
	errors: z.array(
		z.object({
			message: z.string(),
		}),
	),
});

export const NOT_FOUND_SCHEMA = z.object({
	errors: z.array(
		z.object({
			message: z.string(),
		}),
	),
});

export const NO_CONTENT_SCHEMA = z.object({});

export const VALIDATION_OBJECT = {
	message: z.string(),
	meta: z.record(z.string(), z.unknown()).optional(),
	rule: z.string(),
};
