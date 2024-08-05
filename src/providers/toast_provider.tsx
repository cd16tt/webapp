import { ToastRegion } from '#components/molecules/toasts/toast_region';
import { useToasts } from '#hooks/use_toast';

export function ToastProvider() {
	const state = useToasts();

	if (state.visibleToasts.length === 0) {
		return null;
	}

	return <ToastRegion state={state} />;
}
