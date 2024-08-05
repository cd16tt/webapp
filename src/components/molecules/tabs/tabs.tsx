import type { TabProps, TabsProps as AriaTabsProps } from 'react-aria-components';

import { Outlet, useLocation } from '@tanstack/react-router';
import { cx } from 'class-variance-authority';
import { TabList, TabPanel, Tabs as AriaTabs } from 'react-aria-components';

import { TabLink } from '#components/atoms/tab_link/tab_link';

export interface TabsProps extends AriaTabsProps {
	links: Array<{ label: string; href: NonNullable<TabProps['href']> }>;
	className?: string;
}

export function Tabs(props: TabsProps) {
	const { links, className, ...rest } = props;
	const { pathname } = useLocation();

	return (
		<AriaTabs className={cx(className)} selectedKey={pathname} {...rest}>
			<div className="flex">
				<TabList className="flex shrink-0">
					{links.map((link) => (
						<TabLink key={link.href} label={link.label} href={link.href} pathname={pathname} />
					))}
				</TabList>
				<div className="grow border-b border-neutral-3 border-b-solid"></div>
			</div>
			<TabPanel id={pathname} className="bg-neutral-50 p-3">
				<Outlet />
			</TabPanel>
		</AriaTabs>
	);
}
