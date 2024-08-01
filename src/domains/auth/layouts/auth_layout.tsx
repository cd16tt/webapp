import { createRoute, Outlet } from '@tanstack/react-router';

import { rootRoute } from '#lib/tanstack_router';

export const $AuthLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'auth_layout',
	component: AuthLayout,
});

function AuthLayout() {
	return (
		<div className="mx-auto my-10 max-w-md">
			<Outlet />
		</div>
	);
}
