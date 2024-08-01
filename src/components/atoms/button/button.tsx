import type { ReactNode } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { Button as AriaButton } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { buttonVariants, type ButtonVariants } from '#components/atoms/button/button_variants';
import { ButtonWrapper } from '#components/atoms/button/button_wrapper';
import { InnerButton } from '#components/atoms/button/inner_button';

interface ButtonProps extends Omit<AriaButtonProps, 'children'>, ButtonVariants {
	label?: ReactNode;
	icon?: string;
	tooltip?: ReactNode;
}

export function Button(props: ButtonProps) {
	const { icon, label, tooltip, size = 'md', variant, fullWidth, intent, align = 'center', className, ...rest } = props;

	return (
		<ButtonWrapper tooltip={tooltip}>
			<AriaButton
				{...rest}
				className={twMerge(
					cx(
						buttonVariants({
							size,
							variant,
							fullWidth,
							intent,
							iconOnly: icon !== undefined && !label,
							disabled: !!props.isDisabled,
							align,
						}),
						className,
					),
				)}
			>
				<InnerButton icon={icon} label={label} size={size ?? undefined} />
			</AriaButton>
		</ButtonWrapper>
	);
}
