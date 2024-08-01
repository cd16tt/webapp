import type { ReactNode } from 'react';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { Checkbox as AriaCheckbox } from 'react-aria-components';

interface CheckboxProps extends Omit<AriaCheckboxProps, 'children'> {
	label: string;
	description?: ReactNode;
}

export function Checkbox({ label, description, ...props }: CheckboxProps) {
	return (
		<AriaCheckbox {...props} className="block">
			{({ isIndeterminate, isSelected, isFocused }) => (
				<div className="flex items-start gap-2">
					<span
						className={cx('shrink-0 grid h-6 w-6 place-items-center rounded border border-solid', {
							'ring-2 ring-offset-2 ring-brand-5': isFocused,
							'bg-brand-6 border-brand-6': isSelected,
							'border-neutral-4': !isSelected,
						})}
					>
						{isIndeterminate && <i className="i-heroicons:minus-16-solid h-4 w-4 text-white" />}
						{isSelected && <i className="i-heroicons:check-16-solid h-4 w-4 text-white" />}
					</span>
					<div className="mt-0.5">
						<p className="block font-medium leading-tight">{label}</p>
						{description && <p className="mt-0.5 block text-sm text-neutral-5">{description}</p>}
					</div>
				</div>
			)}
		</AriaCheckbox>
	);
}
