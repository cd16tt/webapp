import { lazy } from 'react';

export const TanStackRouterDevtools = import.meta.env.PROD
	? () => null
	: lazy(() =>
			import('@tanstack/router-devtools').then(({ TanStackRouterDevtools }) => ({
				default: TanStackRouterDevtools,
			})),
		);
