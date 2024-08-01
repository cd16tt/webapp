import { create } from 'zustand';

interface NavigationStore {
	headerTitle: string;
	setHeaderTitle: (title: string) => void;
}

const navigationStore = create<NavigationStore>((set) => ({
	headerTitle: 'Tableau de bord',
	setHeaderTitle: (title) => set({ headerTitle: title }),
}));

export function useHeaderTitle() {
	return navigationStore(({ headerTitle, setHeaderTitle }) => ({ headerTitle, setHeaderTitle }));
}
