import type { HTMLAttributes } from 'react';

import { cx } from 'class-variance-authority';
import { DateTime } from 'luxon';

interface TimeAgoProps extends HTMLAttributes<HTMLTimeElement> {
	date: Date;
}

export function TimeAgo(props: TimeAgoProps) {
	const { date: _date, className, ...rest } = props;
	const date = DateTime.fromJSDate(_date);

	if (!date.isValid) {
		return null;
	}

	return (
		<time {...rest} className={cx(className, 'inline-block')} dateTime={date.toISO()}>
			{date.toRelative({ locale: 'fr' })}
		</time>
	);
}
