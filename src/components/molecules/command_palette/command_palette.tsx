import { Command } from 'cmdk';
import { useEffect, useState } from 'react';

export function CommandPalette() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
			<Command.Input />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>

				<Command.Group heading="Letters">
					<Command.Item>a</Command.Item>
					<Command.Item>b</Command.Item>
					<Command.Separator />
					<Command.Item>c</Command.Item>
				</Command.Group>

				<Command.Item>Apple</Command.Item>
			</Command.List>
		</Command.Dialog>
	);
}
