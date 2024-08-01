import { QueryClient } from '@tanstack/react-query';
import { initContract } from '@ts-rest/core';
import { initQueryClient } from '@ts-rest/react-query';

import { authContract } from '#contracts/auth_contract';

export const queryClient = new QueryClient();

const contract = initContract();

export const apiClient = initQueryClient(
	contract.router({
		auth: authContract(contract),
	}),
	{
		baseUrl: import.meta.env.VITE_API_BASE,
		baseHeaders: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		validateResponse: true,
	},
);
