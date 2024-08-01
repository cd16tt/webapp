import { cx } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';

import { SidebarLink } from '#components/atoms/sidebar_link/sidebar_link';
import { DomainSwitcher } from '#components/molecules/domain_switcher/domain_switcher';
import { useSidebarPreferences } from '#stores/user_preferences_store';

export function CommitteeSidebar({ className }: { className?: string }) {
	const { isSidebarOpen } = useSidebarPreferences();

	return (
		<AnimatePresence>
			{isSidebarOpen && (
				<motion.aside
					layout
					className={cx('flex flex-col h-full bg-white w-[280px] border-r border-r-neutral-3 border-r-solid', className)}
					initial={{ x: -280 }}
					animate={{ x: 0 }}
					key="sidebar"
					transition={{
						ease: 'linear',
						duration: 0.05,
					}}
				>
					<DomainSwitcher className="mx-3 mt-3" />
					<nav className="grow overflow-auto p-3">
						<SidebarLink href="/o" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
						<SidebarLink href="/" label="Tableau de bord" />
					</nav>
				</motion.aside>
			)}
		</AnimatePresence>
	);
}
