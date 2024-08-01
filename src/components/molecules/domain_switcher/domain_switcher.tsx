import { cx } from 'class-variance-authority';

import { Select, type SelectOptions } from '#components/forms/select/select';
import { type Space, useSpacePreferences } from '#stores/user_preferences_store';

const spaces: Array<SelectOptions> = [
	{ label: 'Espace Comité', value: 'committee' },
	{ label: 'Espace Club', value: 'club' },
	{ label: 'Espace Joueur', value: 'player' },
	{ label: 'Espace Arbitre', value: 'referee' },
] as const;

interface DomainSwitcherProps {
	className?: string;
}

export function DomainSwitcher(props: DomainSwitcherProps) {
	const { className } = props;
	const { lastSpaceUsed, setSpace } = useSpacePreferences();

	return (
		<Select
			label="Changer d'espace"
			selectedKey={lastSpaceUsed}
			onSelectionChange={(key) => setSpace(key as Space)}
			options={spaces}
			className={cx(className)}
			hiddenLabel
		/>
	);
}
