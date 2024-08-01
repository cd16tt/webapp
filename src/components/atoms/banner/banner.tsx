import { cx } from 'class-variance-authority';

interface BannerProps {
	variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
	title: string;
	messages: Array<string>;
}

export function Banner({ variant = 'info', title, messages }: BannerProps) {
	if (messages.length === 0) {
		return null;
	}

	return (
		<div
			className={cx('rounded-md p-4 flex', {
				'text-info-6 bg-info-50': variant === 'info',
				'text-success-6 bg-success-50': variant === 'success',
				'text-warning-6 bg-warning-50': variant === 'warning',
				'text-danger-6 bg-danger-50': variant === 'danger',
				'text-neutral-6 bg-neutral-50': variant === 'neutral',
			})}
		>
			<div className="flex">
				{variant === 'info' && <i className="i-heroicons:information-circle-16-solid h-5 w-5 flex-shrink-0" aria-hidden={true} />}
				{variant === 'success' && <i className="i-heroicons:check-circle-16-solid h-5 w-5 flex-shrink-0" aria-hidden={true} />}
				{variant === 'warning' && (
					<i className="i-heroicons:exclamation-circle-16-solid h-5 w-5 flex-shrink-0" aria-hidden={true} />
				)}
				{variant === 'danger' && <i className="i-heroicons:x-circle-16-solid h-5 w-5 flex-shrink-0" aria-hidden={true} />}
				{variant === 'neutral' && (
					<i className="i-heroicons:chat-bubble-left-right-16-solid h-5 w-5 flex-shrink-0" aria-hidden={true} />
				)}

				<div className="ml-3 -mt-0.5">
					<p className="font-medium">{title}</p>
					<div className="mt-1 text-sm">
						{messages.length === 1 ? (
							<p>{messages[0]}</p>
						) : (
							<ul role="list" className="list-disc pl-5 space-y-1">
								{messages.map((message, index) => (
									<li key={index}>{message}</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
