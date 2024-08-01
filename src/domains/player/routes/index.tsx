import { createRoute } from '@tanstack/react-router';

import { $PlayerLayoutRoute } from '#domains/player/layouts/player_layout';

export const $PlayerDashboardRoute = createRoute({
	getParentRoute: () => $PlayerLayoutRoute,
	path: '/p/',
	component: () => <div>Dashboard player</div>,
});
