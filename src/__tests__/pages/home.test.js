import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('Home page', () => {
	it('renders Home page', () => {
		const { getByText, getByPlaceholderText } = render(<Home />);

		expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
		expect(getByText('Watch anywhere. Cancel anytime')).toBeTruthy();
		expect(
			getByText(
				'Ready to watch? Enter your email to create or restart your membership.'
			)
		);
		expect(getByPlaceholderText('Email Address')).toBeTruthy();
		expect(getByText('Get Started')).toBeTruthy();
	});
});
