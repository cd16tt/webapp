import { createRoute } from '@tanstack/react-router';

import { $UserLayoutRoute } from '#domains/user/layouts/user_layout';

export const $UserDashboardRoute = createRoute({
	getParentRoute: () => $UserLayoutRoute,
	path: '/u/',
	component: UserProfile,
});

function UserProfile() {
	return (
		<>
			<h1>Profil</h1>
		</>
	);
}
