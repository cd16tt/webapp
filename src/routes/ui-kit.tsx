import { createRoute } from '@tanstack/react-router';

import { Link } from '#components/atoms/button/link';
import { rootRoute } from '#lib/tanstack_router';

export const $UiKitRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/ui-kit',
	component: UiKit,
});

function UiKit() {
	return (
		<div className="m-10 border-2 border-neutral-8 rounded-md border-solid p-10">
			<h1>UI Kit</h1>

			<details className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
				<summary>Taille SM</summary>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons simples</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="sm" variant="solid" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="solid" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="solid" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="solid" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="solid" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="solid" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="sm" variant="outline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="outline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="outline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="outline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="outline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="outline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="sm" variant="underline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="underline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="underline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="underline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="underline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="underline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Ghost</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="sm" variant="ghost" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="ghost" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="ghost" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="ghost" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="ghost" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="sm" variant="ghost" intent="light" label="Label du bouton" />
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons avec icône</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							label="Label du bouton"
						/>
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Icône seul</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Ghost</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="sm"
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>
				</div>
			</details>

			<details className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
				<summary>Taille MD</summary>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons simples</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" variant="solid" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="solid" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="solid" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="solid" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="solid" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="solid" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" variant="outline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="outline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="outline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="outline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="outline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="outline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" variant="underline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="underline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="underline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="underline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="underline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" variant="underline" intent="light" label="Label du bouton" />
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons avec icône</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							label="Label du bouton"
						/>
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Icône seul</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>
				</div>
			</details>

			<details className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
				<summary>Taille LG</summary>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons simples</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="lg" variant="solid" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="solid" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="solid" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="solid" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="solid" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="solid" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="lg" variant="outline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="outline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="outline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="outline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="outline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="outline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="lg" variant="underline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="underline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="underline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="underline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="underline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="lg" variant="underline" intent="light" label="Label du bouton" />
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons avec icône</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							label="Label du bouton"
						/>
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Icône seul</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="lg"
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>
				</div>
			</details>

			<details className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
				<summary>Disabled</summary>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons simples</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="solid" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="outline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="underline" intent="light" label="Label du bouton" />
					</div>

					<h4 className="mb-2 mt-5">Ghost</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="brand" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="neutral" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="danger" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="warning" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="success" label="Label du bouton" />
						<Link href="/auth/login" size="md" isDisabled variant="ghost" intent="light" label="Label du bouton" />
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Boutons avec icône</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							label="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							label="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							label="Label du bouton"
						/>
					</div>
				</div>

				<div className="mt-10 border-2 border-neutral-8 rounded-md border-solid p-4">
					<h3>Icône seul</h3>

					<h4 className="mb-2 mt-5">Plain</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="solid"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Outlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="outline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Underlined</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="underline"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>

					<h4 className="mb-2 mt-5">Ghost</h4>
					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="brand"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="neutral"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="danger"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="warning"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="success"
							tooltip="Label du bouton"
						/>
						<Link
							href="/auth/login"
							size="md"
							isDisabled
							icon="i-heroicons:eye-16-solid"
							variant="ghost"
							intent="light"
							tooltip="Label du bouton"
						/>
					</div>
				</div>
			</details>
		</div>
	);
}
