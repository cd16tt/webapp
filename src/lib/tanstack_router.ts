import { createRootRoute, createRouter, type NavigateOptions, type ToOptions } from '@tanstack/react-router';

import { $AuthLayoutRoute } from '#domains/auth/layouts/auth_layout';
import { $ForgotPasswordRoute } from '#domains/auth/routes/forgot-password';
import { $LoginRoute } from '#domains/auth/routes/login';
import { $ResetPasswordRoute } from '#domains/auth/routes/reset-password.$token';
import { $ClubLayoutRoute } from '#domains/club/layouts/club_layout';
import { $ClubDashboardRoute } from '#domains/club/routes';
import { $CommitteeLayoutRoute } from '#domains/committee/layouts/committee_layout';
import { $CommitteeDashboardRoute } from '#domains/committee/routes';
import { $PlayerLayoutRoute } from '#domains/player/layouts/player_layout';
import { $PlayerDashboardRoute } from '#domains/player/routes';
import { $RefereeLayoutRoute } from '#domains/referee/layouts/referee_layout';
import { $RefereeDashboardRoute } from '#domains/referee/routes';
import { $UserLayoutRoute } from '#domains/user/layouts/user_layout';
import { $UserDashboardRoute } from '#domains/user/routes';
import { Root } from '#routes/__root';
import { $UiKitRoute } from '#routes/ui-kit';

export const rootRoute = createRootRoute({
	component: Root,
});

const routeTree = rootRoute.addChildren([
	$UiKitRoute,
	$AuthLayoutRoute.addChildren([$ForgotPasswordRoute, $LoginRoute, $ResetPasswordRoute]),
	$ClubLayoutRoute.addChildren([$ClubDashboardRoute]),
	$CommitteeLayoutRoute.addChildren([$CommitteeDashboardRoute]),
	$PlayerLayoutRoute.addChildren([$PlayerDashboardRoute]),
	$RefereeLayoutRoute.addChildren([$RefereeDashboardRoute]),
	$UserLayoutRoute.addChildren([$UserDashboardRoute]),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

declare module 'react-aria-components' {
	interface RouterConfig {
		href: ToOptions['to'];
		routerOptions: Omit<NavigateOptions, keyof ToOptions>;
	}
}
