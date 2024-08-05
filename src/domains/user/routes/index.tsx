import { createRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import { $UserLayoutRoute } from '#domains/user/layouts/user_layout';
import { useHeaderTitle } from '#stores/navigation_store';

export const $UserDashboardRoute = createRoute({
	getParentRoute: () => $UserLayoutRoute,
	path: '/u/',
	component: UserProfile,
});

function UserProfile() {
	const { setHeaderTitle } = useHeaderTitle();

	useEffect(() => {
		setHeaderTitle('Mon profil licencié');
	}, []);

	return (
		<>
			<h1>User Profile</h1>
		</>
	);
}
