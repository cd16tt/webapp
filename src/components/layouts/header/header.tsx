import { useNavigate } from '@tanstack/react-router';
import { cx } from 'class-variance-authority';
import { Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';

import { Button } from '#components/atoms/button/button';
import { NotificationsWindow } from '#components/molecules/notifications_window/notifications_window';
import { apiClient } from '#lib/query_client';
import { useAuthActions, useAuthUser } from '#stores/auth_store';
import { useHeaderTitle } from '#stores/navigation_store';
import { useSidebarPreferences } from '#stores/user_preferences_store';

interface HeaderProps {
	className?: string;
}

export function Header(props: HeaderProps) {
	const { className } = props;
	const { isSidebarOpen, toggleSidebar } = useSidebarPreferences();
	const { headerTitle } = useHeaderTitle();

	return (
		<header className={cx('flex items-center justify-between border-b border-b-neutral-3 border-b-solid p-2', className)}>
			<div className="w-full flex items-center gap-3">
				<Button
					variant="ghost"
					intent="brand"
					onPress={toggleSidebar}
					icon={isSidebarOpen ? 'i-heroicons:x-mark' : 'i-heroicons:bars-3-16-solid'}
					tooltip={isSidebarOpen ? 'Masquer la barre latérale' : 'Afficher la barre latérale'}
				/>
				<p className="font-secondary text-xl font-medium">{headerTitle}</p>
			</div>
			<div className="flex items-center justify-end gap-2">
				<NotificationsWindow />
				<UserSettings />
			</div>
		</header>
	);
}

function UserSettings() {
	const mutation = apiClient.auth.logout.useMutation();
	const { logout } = useAuthActions();
	const authUser = useAuthUser()!;
	const navigate = useNavigate();

	function handleLogout() {
		mutation.mutate({});
		logout();
		void navigate({ to: '/auth/login' });
	}

	return (
		<MenuTrigger>
			<Button
				intent="light"
				variant="ghost"
				tooltip="Gestion du compte"
				icon="i-heroicons:user-circle-16-solid"
				label={authUser.firstname}
			/>
			<Popover offset={4} className="border border-neutral-3 rounded-md border-solid bg-white p-1 shadow-md">
				<Menu>
					<MenuItem className="rounded-md px-3 py-2 hover:bg-neutral-1" onAction={() => alert('open')}>
						Profil
					</MenuItem>
					<MenuItem className="rounded-md px-3 py-2 hover:bg-neutral-1" onAction={handleLogout}>
						Déconnexion
					</MenuItem>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
