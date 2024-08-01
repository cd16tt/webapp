import { type ReactElement, useCallback, useState } from 'react';
import { Dialog, DialogTrigger, Popover, Tooltip, TooltipTrigger } from 'react-aria-components';

import { Button } from '#components/atoms/button/button';
import { ExternalLink } from '#components/atoms/button/external_link';
import { Link } from '#components/atoms/button/link';
import { TimeAgo } from '#components/atoms/time_ago/time_ago';

interface Notification {
	id: string;
	title: string;
	date: Date;
	content: string;
	link?:
		| {
				type: 'external';
				url: string;
		  }
		| {
				type: 'internal';
				path: string;
		  };
}

export function NotificationsWindow() {
	const [notifications, setNotifications] = useState<Array<Notification>>([
		{
			id: '1',
			title: 'tur adipisicing elit. Dolor, optio rerum! Ad architecto, atque consequuntur ',
			date: new Date('2024-01-05T12:12:00'),
			content:
				'Lorem ipsum <a href="#">fefefe</a> dolor sit amet, consectetur adipisicing elit. Dolor, optio rerum! Ad architecto, atque consequuntur excepturi quidem rem rerum tenetur?',
			link: {
				type: 'internal',
				path: '/notifications/1',
			},
		},
		{
			id: '2',
			title: 'Nouvelle notification',
			date: new Date('2024-07-16T20:01:00'),
			content:
				'Lorem ipsum <a href="#">fefefe</a> dolor sit amet, consectetur adipisicing elit. Dolor, optio rerum! Ad architecto, atque consequuntur excepturi quidem rem rerum tenetur?',
			link: {
				type: 'external',
				url: 'https://google.com',
			},
		},
		{
			id: '3',
			title: 'Nouvelle notification',
			date: new Date('2024-01-05T10:12:00'),
			content:
				'Lorem ipsum <a href="#">fefefe</a> dolor sit amet, consectetur adipisicing elit. Dolor, optio rerum! Ad architecto, atque consequuntur excepturi quidem rem rerum tenetur?',
		},
	]);

	const deleteNotification = useCallback((id: string) => {
		setNotifications((notifications) => notifications.filter((notification) => notification.id !== id));
	}, []);

	const clearNotifications = useCallback(() => {
		setNotifications([]);
	}, []);

	return (
		<DialogTrigger>
			<Button intent="light" variant="ghost" tooltip="Notifications" icon="i-heroicons:bell-16-solid"></Button>
			<Popover
				placement="bottom end"
				offset={4}
				className="border border-neutral-3 rounded-md border-solid bg-white p-1 shadow-md"
			>
				<Dialog className="grid grid-rows-[auto_1fr] h-full max-h-inherit max-w-sm overflow-hidden py-3">
					<div className="flex items-center justify-between gap-3 px-3">
						<h2 className="text-xl text-neutral-8">Notifications</h2>
						<Button intent="danger" variant="ghost" size="sm" onPress={clearNotifications} label="Supprimer tout" />
					</div>
					<div className="mt-3 overflow-auto px-3 space-y-5">
						{notifications.map((notification) => {
							let link: ReactElement | null = null;

							if (notification?.link?.type === 'internal') {
								link = (
									// @ts-expect-error cannot assume the path exists
									<Link label="Voir plus" href={notification.link.path} intent="neutral" variant="underline" className="mt-2" />
								);
							}

							if (notification?.link?.type === 'external') {
								link = (
									<ExternalLink
										href={notification.link.url}
										intent="neutral"
										variant="underline"
										className="mt-2"
										label="Voir plus"
										target="_blank"
									/>
								);
							}

							return (
								<article key={notification.id} className="relative border-t border-t-neutral-2 border-t-solid pt-4">
									<p className="block pr-14 text-neutral-8 font-medium leading-tight">{notification.title}</p>
									<TimeAgo className="text-sm text-neutral-6 first-letter:uppercase" date={notification.date} />
									<div className="mt-1 text-sm text-neutral-6 leading-tight prose">{notification.content}</div>
									{link}
									<TooltipTrigger closeDelay={200}>
										<Button
											intent="danger"
											variant="ghost"
											size="sm"
											className="absolute right-2 top-2.5"
											onPress={() => deleteNotification(notification.id)}
											tooltip="Supprimer la notification"
											icon="i-heroicons:trash-16-solid"
										/>
										<Tooltip offset={2} className="rounded-md bg-neutral-8 px-2 py-1 text-sm text-white">
											Supprimer la notification
										</Tooltip>
									</TooltipTrigger>
								</article>
							);
						})}
					</div>
				</Dialog>
			</Popover>
		</DialogTrigger>
	);
}
