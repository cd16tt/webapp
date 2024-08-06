import { ToastQueue, useToastQueue } from '@react-stately/toast';

import type { LinkProps } from '#components/atoms/button/link';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface ToastItem {
	title: string;
	description?: string;
	type: ToastType;
	action?: {
		label: string;
		href: LinkProps['href'];
	};
	delay?: number;
}

type ToastProps = Omit<ToastItem, 'type'>;

export const toastQueue = new ToastQueue<ToastItem>({
	maxVisibleToasts: 8,
});

export const useToasts = () => useToastQueue(toastQueue);

interface LoadingProps<P> {
	promise: Promise<P>;
	loading: ToastProps;
	success: (result: P) => ToastProps;
	error: (error: unknown) => ToastProps;
}

function constructToast(props: ToastItem) {
	const { delay } = props;

	if (delay) {
		return toastQueue.add({ ...props }, { timeout: delay });
	}

	return toastQueue.add({ ...props });
}

export const toast = {
	success: (props: ToastProps) => constructToast({ ...props, type: 'success' }),
	error: (props: ToastProps) => constructToast({ ...props, type: 'error' }),
	info: (props: ToastProps) => constructToast({ ...props, type: 'info' }),
	warning: (props: ToastProps) => constructToast({ ...props, type: 'warning' }),
	loading<P>({ promise, loading, success, error }: LoadingProps<P>) {
		const id = constructToast({ ...loading, type: 'loading' });

		promise
			// eslint-disable-next-line promise/always-return
			.then((result) => {
				toastQueue.close(id);
				constructToast({ ...success(result), type: 'success' });
			})
			.catch((error_) => {
				toastQueue.close(id);
				constructToast({ ...error(error_), type: 'success' });
			});
	},
};

export const MEDIUM_TOAST_DELAY = 5_000;
