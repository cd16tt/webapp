import { createRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import { Header } from '#components/layouts/header/header';
import { Tabs, type TabsProps } from '#components/molecules/tabs/tabs';
import { CommitteeSidebar } from '#domains/committee/layouts/sidebar';
import { rootRoute } from '#lib/tanstack_router';
import { useHeaderTitle } from '#stores/navigation_store';

export const $UserLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'user_layout',
	component: UserLayout,
});

const tabLinks: TabsProps['links'] = [
	{ label: 'Informations personnelles', href: '/u' },
	{ label: "Nom d'utilisateur", href: '/u/username' },
	{
		label: 'Mot de passe',
		href: '/u/password',
	},
];

function UserLayout() {
	const { setHeaderTitle } = useHeaderTitle();

	useEffect(() => {
		setHeaderTitle('Mon profil licencié');
	}, []);

	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-full w-full">
			<Header className="col-[2_/_span_1] row-[1_/_span_1]" />
			<CommitteeSidebar className="col-[1_/_span_1] row-[1_/_span_2]" />
			<main className="grid col-[2_/_span_1] row-[2_/_span_1]">
				<Tabs links={tabLinks} className="grid grid-rows-[auto_1fr]" />
			</main>
		</div>
	);
}
