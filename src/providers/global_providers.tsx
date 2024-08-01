import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { Suspense } from 'react';

import { queryClient } from '#/lib/query_client';
import { router } from '#lib/tanstack_router';

export function GlobalProviders() {
	return (
		<Suspense fallback={<p>Chargement...</p>}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Suspense>
	);
}
