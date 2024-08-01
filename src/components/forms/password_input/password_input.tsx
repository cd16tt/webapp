import type { ValidationError } from '@tanstack/react-form';
import type { TextFieldProps } from 'react-aria-components';

import { type ReactNode, useState } from 'react';
import { FieldError, Input, Label, Text, TextField } from 'react-aria-components';

import { cw } from '#/utils';
import { ToggleButton } from '#components/atoms/button/toggle_button';
import { useFieldErrors } from '#hooks/use_field_errors';

interface TextInputProps extends TextFieldProps {
	label: string;
	description?: ReactNode;
	errors?: Array<ValidationError>;
	placeholder?: string;
}

export function PasswordInput(props: TextInputProps) {
	const { label, description, errors, placeholder, ...rest } = props;
	const [showPassword, togglePassword] = useState(false);
	const fieldErrors = useFieldErrors(errors);

	return (
		<TextField {...rest} type={showPassword ? 'text' : 'password'}>
			<Label className="block text-neutral-9 font-medium leading-6">
				{label}
				{props.isRequired && <span className="text-red-5">&nbsp;*</span>}
			</Label>
			<div className="mt-1 flex items-stretch gap-1">
				<div className="relative grow rounded-md shadow-sm">
					<Input
						placeholder={placeholder}
						className={cw(
							'focus:ring-brand-6 block w-full border-0 rounded-md py-2 pl-3 pr-10 text-neutral-9 shadow-sm ring-1 ring-neutral-4 ring-inset placeholder:text-neutral-4 focus:ring-2',
							{ 'ring-2 ring-danger-5': props.isInvalid },
						)}
					/>
					{props.isInvalid && (
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<i aria-hidden="true" className="i-heroicons:exclamation-circle-16-solid h-5 w-5 text-danger-5" />
						</div>
					)}
				</div>
				<ToggleButton
					icon={showPassword ? 'i-heroicons:eye-slash-16-solid' : 'i-heroicons:eye-16-solid'}
					variant="ghost"
					intent="brand"
					isSelected={showPassword}
					onChange={() => togglePassword(!showPassword)}
					tooltip={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
				/>
			</div>
			{props.isInvalid && fieldErrors.length > 0 && (
				<FieldError className="mt-1 block text-sm text-danger-5">
					{fieldErrors.map((error, idx) => (
						<span className="block" key={idx}>
							{error}
						</span>
					))}
				</FieldError>
			)}
			{description && (
				<Text slot="description" className="mt-1 block text-sm text-neutral-5">
					{description}
				</Text>
			)}
		</TextField>
	);
}
