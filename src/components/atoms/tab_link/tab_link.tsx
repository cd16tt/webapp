import type { ReactNode } from 'react';

import { Tab, type TabProps } from 'react-aria-components';

import { cw } from '#/utils';

interface TabLinkProps extends Omit<TabProps, 'id' | 'children' | 'href'> {
	label: ReactNode;
	href: NonNullable<TabProps['href']>;
	pathname: string;
	className?: string;
}

export function TabLink(props: TabLinkProps) {
	const { label, pathname, className, href, ...rest } = props;
	const isActive = pathname === props.href;

	return (
		<Tab
			id={href}
			href={href}
			className={cw(
				{
					'border-neutral-3 border-b text-neutral-7': !isActive,
					'text-brand-7 border-b-2 border-brand-7': isActive,
				},
				className,
				'shrink-0 border-b-solid no-underline px-3 py-2 font-medium',
			)}
			{...rest}
		>
			{label}
		</Tab>
	);
}
