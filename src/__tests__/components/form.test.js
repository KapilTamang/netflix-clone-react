import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form/>', () => {
	it('renders the <Form/> with populated data', () => {
		const { container, getByText, getByPlaceholderText } = render(
			<Form>
				<Form.Title>Sign In Now</Form.Title>
				<Form.Base>
					<Form.Input
						type="email"
						placeholder="Email or phone number"
						onChange={() => {}}
					/>
					<Form.Input
						type="password"
						placeholder="Password"
						onChange={() => {}}
					/>
					<Form.Submit type="submit" disabled>
						Sign In
					</Form.Submit>
					<Form.Text>
						New to Netflix?
						<Form.Link to="/signup">Sign up now.</Form.Link>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. Learn more.
						</Form.TextSmall>
					</Form.Text>
				</Form.Base>
			</Form>
		);

		expect(
			getByText(
				"This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
			)
		).toBeTruthy();
		expect(getByText('Sign In Now')).toBeTruthy();
		expect(getByText('Sign In')).toBeTruthy();
		expect(getByPlaceholderText('Email or phone number')).toBeTruthy();
		expect(getByPlaceholderText('Password')).toBeTruthy();
		expect(getByText('Sign In').disabled).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders <Form/> with an error', () => {
		const { container, getByText, queryByText } = render(
			<Form>
				<Form.Error>Your email address is already being used</Form.Error>
				<Form.Submit>Sign In</Form.Submit>
			</Form>
		);

		expect(getByText('Your email address is already being used')).toBeTruthy();
		expect(queryByText('Sing In')).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
