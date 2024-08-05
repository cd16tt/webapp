import { Outlet, useRouter } from '@tanstack/react-router';
import { RouterProvider } from 'react-aria-components';

import { CommandPalette } from '#components/molecules/command_palette/command_palette';
import { TanStackRouterDevtools } from '#lib/router_devtools';
import { ToastProvider } from '#providers/toast_provider';

export function Root() {
	const router = useRouter();

	return (
		<>
			<RouterProvider
				navigate={(to, options) => void router.navigate({ to: to ?? '/', ...options })}
				useHref={(to) => router.buildLocation({ to: to ?? '/' }).href}
			>
				<Outlet />
				<ToastProvider />
				<CommandPalette />
			</RouterProvider>
			<TanStackRouterDevtools />
		</>
	);
}
