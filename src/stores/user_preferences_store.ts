import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Space = 'committee' | 'club' | 'player' | 'referee';

type UserPreferencesStore = {
	lastSpaceUsed: Space;
	updateLastSpaceUsed: (space: Space) => void;
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
};

export const userPreferencesStore = create(
	persist<UserPreferencesStore>(
		(set) => ({
			lastSpaceUsed: 'player',
			updateLastSpaceUsed: (space) => set({ lastSpaceUsed: space }),
			isSidebarOpen: true,
			toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
		}),
		{
			name: 'user_preferences',
		},
	),
);

export function useSpacePreferences() {
	return userPreferencesStore((state) => ({ lastSpaceUsed: state.lastSpaceUsed, setSpace: state.updateLastSpaceUsed }));
}

export function useSidebarPreferences() {
	return userPreferencesStore((state) => ({ isSidebarOpen: state.isSidebarOpen, toggleSidebar: state.toggleSidebar }));
}

export function getActiveSpacePath() {
	return constructSpacePath(userPreferencesStore.getState().lastSpaceUsed);
}

export function constructSpacePath(space: Space) {
	if (space === 'committee') {
		return '/o';
	}

	if (space === 'club') {
		return '/c';
	}

	if (space === 'referee') {
		return '/r';
	}

	return '/p';
}
