import { createRoute, Outlet } from '@tanstack/react-router';

import { rootRoute } from '#lib/tanstack_router';

export const $ClubLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'club_layout',
	component: ClubLayout,
});

function ClubLayout() {
	return <Outlet />;
}
