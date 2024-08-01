import type { HTMLAttributes } from 'react';

import { cx } from 'class-variance-authority';

interface CardProps extends HTMLAttributes<HTMLElement> {}

export function Card(props: CardProps) {
	const { className, ...rest } = props;
	return <div {...rest} className={cx(className, 'rounded-md')} />;
}
