import { createRoute, Outlet } from '@tanstack/react-router';

import { Header } from '#components/layouts/header/header';
import { CommitteeSidebar } from '#domains/committee/layouts/sidebar';
import { rootRoute } from '#lib/tanstack_router';

export const $CommitteeLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'committee_layout',
	component: CommitteeLayout,
});

function CommitteeLayout() {
	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-full w-full">
			<Header className="col-[2_/_span_1] row-[1_/_span_1]" />
			<CommitteeSidebar className="col-[1_/_span_1] row-[1_/_span_2]" />
			<main className="col-[2_/_span_1] row-[2_/_span_1]">
				<Outlet />
			</main>
		</div>
	);
}
