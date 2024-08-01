import { createRoute } from '@tanstack/react-router';

import { $ClubLayoutRoute } from '#domains/club/layouts/club_layout';

export const $ClubDashboardRoute = createRoute({
	getParentRoute: () => $ClubLayoutRoute,
	path: '/c/',
	component: () => <div>Dashboard club</div>,
});
