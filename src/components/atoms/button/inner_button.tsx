import type { ReactNode } from 'react';

import { cx } from 'class-variance-authority';

interface InnerButtonProps {
	icon?: string | undefined;
	label?: ReactNode | undefined;
	size?: 'sm' | 'md' | 'lg' | undefined;
}

export function InnerButton(props: InnerButtonProps) {
	const { icon, label, size = 'md' } = props;

	return (
		<>
			{icon && (
				<i aria-hidden="true" className={cx(icon, { 'w-5 h-5': ['md', 'lg'].includes(size), 'w-4 h-4': size === 'sm' })} />
			)}
			{label && <span className={cx('text-center', { 'text-sm': size === 'sm' })}>{label}</span>}
		</>
	);
}
