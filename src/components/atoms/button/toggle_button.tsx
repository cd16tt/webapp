import type { ReactNode } from 'react';
import type { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { ToggleButton as AriaToggleButton } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { buttonVariants, type ButtonVariants } from '#components/atoms/button/button_variants';
import { ButtonWrapper } from '#components/atoms/button/button_wrapper';
import { InnerButton } from '#components/atoms/button/inner_button';

interface ButtonProps extends Omit<AriaToggleButtonProps, 'children'>, ButtonVariants {
	label?: ReactNode;
	icon?: string;
	tooltip?: ReactNode;
}

export function ToggleButton(props: ButtonProps) {
	const { icon, label, tooltip, size = 'md', variant, intent, fullWidth, align = 'center', className, ...rest } = props;

	return (
		<ButtonWrapper tooltip={tooltip}>
			<AriaToggleButton
				{...rest}
				className={twMerge(
					cx(
						className,
						buttonVariants({
							size,
							variant,
							fullWidth,
							intent,
							iconOnly: icon !== undefined && !label,
							disabled: !!props.isDisabled,
							align,
						}),
					),
				)}
			>
				<InnerButton icon={icon} label={label} size={size ?? undefined} />
			</AriaToggleButton>
		</ButtonWrapper>
	);
}
