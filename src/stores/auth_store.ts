import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { apiClient } from '#lib/query_client';
import type { Uid } from '#types/utils';
import type { Permission } from '#utils/security';

interface AuthUser {
	uid: Uid;
	firstname: string;
	lastname: string;
	licenseCode: string;
	permissions: Array<Permission>;
}

export interface AuthStore {
	$hydrated: boolean;
	user: AuthUser | undefined;
	login: (user: AuthUser) => void;
	logout: () => void;
}

const initialAuthState = await apiClient.auth.check.query();

export const authStore = create(
	persist<AuthStore>(
		(set) => ({
			$hydrated: initialAuthState.status === 200,
			user: initialAuthState.status === 200 ? initialAuthState.body : undefined,
			login: (user) => set({ user, $hydrated: true }),
			logout: () => set({ user: undefined, $hydrated: true }),
		}),
		{
			name: 'authentication',
		},
	),
);

export function isNotAuthenticated() {
	return !authStore.getState().user;
}

export function isAuthenticated() {
	return authStore.getState().$hydrated && !!authStore.getState().user;
}

export function useUid() {
	return authStore((state) => state.user?.uid);
}

export function useAuthUser() {
	return authStore((state) => state.user);
}

export function usePermissions() {
	return authStore((state) => state.user?.permissions);
}

export function useAuthHydrated() {
	return authStore((state) => state.$hydrated);
}

export function useAuthActions() {
	return authStore((state) => ({
		login: state.login,
		logout: state.logout,
	}));
}
