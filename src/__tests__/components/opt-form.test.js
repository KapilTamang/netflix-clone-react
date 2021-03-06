import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../components';

describe('<OptForm/>', () => {
	it('renders <OptForm/> with populated data', () => {
		const { container, getByText, getByPlaceholderText } = render(
			<OptForm>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>
				<OptForm.Break />
				<OptForm.Input placeholder="Email Address"></OptForm.Input>
				<OptForm.Button>Get Started</OptForm.Button>
			</OptForm>
		);

		expect(
			getByText(
				'Ready to watch? Enter your email to create or restart your membership.'
			)
		).toBeTruthy();
		expect(getByPlaceholderText('Email Address')).toBeTruthy();
		expect(getByText('Get Started')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
