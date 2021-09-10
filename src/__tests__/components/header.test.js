import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header/>', () => {
	it('renders the basic <Header/> with a background.', () => {
		const { container, getByText, getByTestId } = render(
			<Header>
				<Header.Frame>
					<Header.Logo src="/logo.svg" alt="Netflix" />
					<Header.TextLink>Link</Header.TextLink>
					<Header.ButtonLink>Sign In</Header.ButtonLink>
				</Header.Frame>
			</Header>
		);

		expect(getByText('Link')).toBeTruthy();
		expect(getByText('Sign In')).toBeTruthy();
		expect(getByTestId('header-bg')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the basic <Header/> without a background', () => {
		const { container, getByText, getByTestId } = render(
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo src="/logo.svg" alt="Netflix" />
					<Header.TextLink>Link</Header.TextLink>
					<Header.ButtonLink>Sign In</Header.ButtonLink>
				</Header.Frame>
			</Header>
		);

		expect(getByText('Link')).toBeTruthy();
		expect(getByText('SignIn')).toBeTruthy();
		expect(getByTestId('header-bg')).toBeFalsy();

		expect(container.firstChild).toBeTruthy();
	});

	it('renders the full <Header/> with a background', () => {
		const { container, getByText, getByTestId } = render(
			<Header src="joker" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo src="/logo.svg" alt="Netflix" />
						<Header.TextLink active onClick={() => {}}>
							Films
						</Header.TextLink>
						<Header.TextLink active={false} onClick={() => {}}>
							Series
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search searchTerm="Joker" searchTerm={() => {}} />
						<Header.Profile>
							<Header.Image src="obama" />
							<Header.Dropdown>
								<Header.Group>
									<Header.Image src="obama" />
									<Header.TextLink>Barak Obama</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => {}}>Sign Out</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text> Forever alone in a crowd</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
		);

		expect(getByTestId('search-input')).toBeTruthy();
		expect(getByTestId('search-input').value).toBe('Joker');
		fireEvent.change(getByTestId('search-input'), {
			target: { value: 'Simpsons' },
		});

		fireEvent.click(getByTestId('search-click'));

		expect(getByTestId('search-icon')).toBeTruthy();
		expect(getByText('Films')).toBeTruthy();
		expect(getByText('Series')).toBeTruthy();
		expect(getByText('Barak Obama')).toBeTruthy();
		expect(getByText('Sign Out')).toBeTruthy();
		expect(getByText('Watch Joker Now')).toBeTruthy();
		expect(getByText('Forever alone in a crowd')).toBeTruthy();
		expect(getByText('Play')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
