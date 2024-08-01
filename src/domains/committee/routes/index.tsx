import { createRoute } from '@tanstack/react-router';

import { $CommitteeLayoutRoute } from '#domains/committee/layouts/committee_layout';

export const $CommitteeDashboardRoute = createRoute({
	getParentRoute: () => $CommitteeLayoutRoute,
	path: '/o/',
	component: () => <div>Dashboard comité</div>,
});
