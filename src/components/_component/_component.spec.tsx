import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// import { HeaderCommittee } from '~/components';
// import { render } from '~/tests/utils';

describe('Component', () => {
	it('should render', () => {
		// render();
		expect(screen.getByText('Hello').tagName).toBeInTheDocument();
	});
});
