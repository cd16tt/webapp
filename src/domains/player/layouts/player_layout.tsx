import { createRoute, Outlet } from '@tanstack/react-router';

import { rootRoute } from '#lib/tanstack_router';

export const $PlayerLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'player_layout',
	component: PlayerLayout,
});

function PlayerLayout() {
	return <Outlet />;
}
