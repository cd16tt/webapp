import { Link, type LinkProps } from '#components/atoms/button/link';

interface SidebarLinkProps extends Pick<LinkProps, 'href' | 'label'> {}

export function SidebarLink({ href, label }: SidebarLinkProps) {
	return <Link href={href} intent="neutral" variant="ghost" fullWidth align="start" label={label} />;
}
