import type { AriaToastRegionProps } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';

import { useToastRegion } from '@react-aria/toast';
import { useRef } from 'react';

import { Toast } from '#components/molecules/toasts/toast';
import type { ToastItem } from '#hooks/use_toast';

interface ToastRegionProps extends AriaToastRegionProps {
	state: ToastState<ToastItem>;
}

export function ToastRegion({ state, ...props }: ToastRegionProps) {
	const ref = useRef(null);
	const { regionProps } = useToastRegion<ToastItem>(props, state, ref);

	return (
		<div {...regionProps} ref={ref} className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[9999] p-3 space-y-3">
			<div className="ml-auto h-full max-w-sm space-y-3">
				{state.visibleToasts.map((toast) => (
					<Toast key={toast.key} toast={toast} state={state} />
				))}
			</div>
		</div>
	);
}
