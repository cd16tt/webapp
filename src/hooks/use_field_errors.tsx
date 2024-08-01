import type { ValidationError } from '@tanstack/react-form';
import type { ReactNode } from 'react';

export function useFieldErrors(errors: Array<ValidationError> | undefined): Array<ReactNode> {
	const fieldErrors = errors?.at(0);

	if (!fieldErrors) {
		return [];
	}

	const errorsList = fieldErrors.split('///').map((part) => part.trim());

	if (errorsList.length === 1) {
		return [fieldErrors];
	}

	return errorsList.map((part) => (
		<em className="inline-flex items-center gap-1">
			<i className="i-heroicons:arrow-small-right-solid" />
			{part}
		</em>
	));
}
