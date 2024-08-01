import type { PropsWithChildren } from 'react';

type ComponentProps = PropsWithChildren;

export function GlobalLayout({ children }: ComponentProps) {
	return <>{children}</>;
}
