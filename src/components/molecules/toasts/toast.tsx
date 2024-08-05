import type { AriaToastProps } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';

import { useToast } from '@react-aria/toast';
import { cx } from 'class-variance-authority';
import { useRef } from 'react';

import { Button } from '#components/atoms/button/button';
import { Link } from '#components/atoms/button/link';
import { type ToastItem } from '#hooks/use_toast';

interface ToastProps extends AriaToastProps<ToastItem> {
	state: ToastState<ToastItem>;
}

export function Toast({ state, ...props }: ToastProps) {
	const ref = useRef(null);
	const { toastProps, contentProps, titleProps, descriptionProps } = useToast(props, state, ref);
	const toastData = props.toast.content;

	const hasAction = toastData.action !== undefined;
	const isDismissible = toastData.delay === undefined;

	return (
		<div
			{...toastProps}
			ref={ref}
			className={cx('pointer-events-initial border rounded-md border-solid bg-white shadow-md shadow-op-30', {
				'border-info-4 shadow-info-1': toastData.type === 'info',
				'border-success-4 shadow-success-1': toastData.type === 'success',
				'border-warning-4 shadow-warning-1': toastData.type === 'warning',
				'border-danger-4 shadow-danger-1': toastData.type === 'error',
				'relative overflow-hidden': !isDismissible,
			})}
		>
			<div {...contentProps} className="flex items-start gap-x-2 px-2 py-3">
				<i
					className={cx('h-6 w-6 shrink-0', {
						'i-heroicons:check-circle-solid text-success-6': toastData.type === 'success',
						'i-heroicons:information-circle-solid text-info-6': toastData.type === 'info',
						'i-heroicons:exclamation-triangle-solid text-warning-6': toastData.type === 'warning',
						'i-heroicons:x-circle-solid text-danger-6': toastData.type === 'error',
					})}
				/>
				<div className="mt-1 space-y-1">
					<p
						{...titleProps}
						className={cx('font-medium text-sm leading-tight', {
							'text-info-6': toastData.type === 'info',
							'text-success-6': toastData.type === 'success',
							'text-warning-6': toastData.type === 'warning',
							'text-danger-6': toastData.type === 'error',
						})}
					>
						{toastData.title}
					</p>
					{toastData.description && (
						<p className="text-sm text-neutral-6" {...descriptionProps}>
							{toastData.description}
						</p>
					)}
				</div>
			</div>
			{(hasAction || isDismissible) && (
				<div
					className={cx('flex border border-t-solid', {
						'border-info-4': toastData.type === 'info',
						'border-success-4': toastData.type === 'success',
						'border-warning-4': toastData.type === 'warning',
						'border-danger-4': toastData.type === 'error',
					})}
				>
					{isDismissible && (
						<Button
							intent="neutral"
							variant="ghost"
							label="Fermer"
							fullWidth
							size="sm"
							className={cx('rounded-t-none', { 'rounded-br-none': toastData.action })}
							onPress={() => state.close(props.toast.key)}
						/>
					)}
					{toastData.action && (
						<Link
							intent="brand"
							variant="ghost"
							href={toastData.action.href}
							label={toastData.action.label}
							fullWidth
							size="sm"
							className="rounded-t-none! rounded-bl-none!"
						/>
					)}
				</div>
			)}
			{toastData.delay && (
				<div
					className={cx('absolute bottom-0 left-0 h-1 w-full transform-origin-left-bottom animate-[progress_linear]', {
						'bg-info-5': toastData.type === 'info',
						'bg-success-5': toastData.type === 'success',
						'bg-warning-5': toastData.type === 'warning',
						'bg-danger-5': toastData.type === 'error',
					})}
					style={{ animationDuration: `${toastData.delay / 1000}s` }}
				></div>
			)}
		</div>
	);
}
