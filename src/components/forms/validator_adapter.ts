import { zodValidator } from '@tanstack/zod-form-adapter';

export const validatorAdapter = zodValidator({ transformErrors: (errors) => errors.map((error) => error.message).join('///') });
