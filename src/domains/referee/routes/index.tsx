import { createRoute } from '@tanstack/react-router';

import { $RefereeLayoutRoute } from '#domains/referee/layouts/referee_layout';

export const $RefereeDashboardRoute = createRoute({
	getParentRoute: () => $RefereeLayoutRoute,
	path: '/r/',
	component: () => <div>Dashboard referee</div>,
});
