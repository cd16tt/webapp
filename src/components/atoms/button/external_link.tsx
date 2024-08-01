import type { ReactNode } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import { buttonVariants, type ButtonVariants } from '#components/atoms/button/button_variants';
import { ButtonWrapper } from '#components/atoms/button/button_wrapper';
import { InnerButton } from '#components/atoms/button/inner_button';

type ExcludedProps = 'children' | 'href' | 'slot' | 'style';

interface ExternalLinkProps extends Omit<RouterLinkProps, ExcludedProps>, ButtonVariants {
	label?: ReactNode;
	icon?: string;
	tooltip?: ReactNode;
	href: string;
}

export function ExternalLink(props: ExternalLinkProps) {
	const { href, icon, label, tooltip, size = 'md', variant, fullWidth, intent, align = 'center', className, ...rest } = props;

	return (
		<ButtonWrapper tooltip={tooltip}>
			<a
				{...rest}
				href={href}
				className={twMerge(
					cx(
						className,
						buttonVariants({
							size,
							variant,
							fullWidth,
							intent,
							iconOnly: !!icon && !label,
							disabled: !!props.isDisabled,
							align,
						}),
					),
				)}
			>
				<InnerButton icon={icon} label={label} size={size ?? undefined} />
			</a>
		</ButtonWrapper>
	);
}
