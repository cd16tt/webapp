import { createRoute, Outlet } from '@tanstack/react-router';

import { rootRoute } from '#lib/tanstack_router';

export const $RefereeLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'referee_layout',
	component: RefereeLayout,
});

function RefereeLayout() {
	return <Outlet />;
}
