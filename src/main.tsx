import './index.css';
import 'virtual:uno.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalProviders } from '#/providers/global_providers';

const root = document.querySelector('#root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<GlobalProviders />
		</StrictMode>,
	);
}
