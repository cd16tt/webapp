import type { ReactNode } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-aria-components';

import { useRouter } from '@tanstack/react-router';
import { cx } from 'class-variance-authority';
import { Link as AriaLink } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { buttonVariants, type ButtonVariants } from '#components/atoms/button/button_variants';
import { ButtonWrapper } from '#components/atoms/button/button_wrapper';
import { InnerButton } from '#components/atoms/button/inner_button';

export interface LinkProps extends Omit<RouterLinkProps, 'children'>, ButtonVariants {
	label?: ReactNode;
	icon?: string;
	tooltip?: ReactNode;
}

export function Link(props: LinkProps) {
	const { icon, label, tooltip, size = 'md', variant, fullWidth, intent, align = 'center', className, ...rest } = props;
	const { matchRoute } = useRouter();

	const isActiveRoute = matchRoute({ to: props.href ?? '' });

	return (
		<ButtonWrapper tooltip={tooltip}>
			<AriaLink
				{...rest}
				className={twMerge(
					cx(
						className,
						buttonVariants({
							size,
							variant: isActiveRoute ? 'solid' : variant,
							fullWidth,
							intent: isActiveRoute ? 'brand' : intent,
							iconOnly: !!icon && !label,
							disabled: !!props.isDisabled,
							align,
						}),
					),
				)}
			>
				<InnerButton icon={icon} label={label} size={size ?? undefined} />
			</AriaLink>
		</ButtonWrapper>
	);
}
