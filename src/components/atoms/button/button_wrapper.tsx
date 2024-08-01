import type { PropsWithChildren, ReactNode } from 'react';

import { Tooltip, TooltipTrigger } from 'react-aria-components';

interface ButtonWrapperProps extends PropsWithChildren {
	tooltip: ReactNode | undefined;
}

export function ButtonWrapper(props: ButtonWrapperProps) {
	const { tooltip, children } = props;

	if (!tooltip) return children;

	return (
		<TooltipTrigger>
			{children}
			<Tooltip offset={2} className="rounded-md bg-neutral-8 px-2 py-1 text-sm text-white">
				{tooltip}
			</Tooltip>
		</TooltipTrigger>
	);
}
