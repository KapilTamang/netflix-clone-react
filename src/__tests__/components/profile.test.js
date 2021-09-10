import React from 'react';
import { render } from '@testing-library/react';
import { Profile } from '../../components';

describe('<Profile/>', () => {
	it('renders <Profile/> with populated data', () => {
		const { container, getByText, getByTestId } = render(
			<Profile>
				<Profile.Title>Who's watching?</Profile.Title>
				<Profile.List>
					<Profile.User onClick={() => {}}>
						<Profile.Image src={'obama'} data-testid="profile-image" />
						<Profile.Name>Barak Obama</Profile.Name>
					</Profile.User>
				</Profile.List>
			</Profile>
		);

		expect(getByText("Who's watching?")).toBeTruthy();
		expect(getByTestId('profile-image')).toBeTruthy();
		expect(getByText('Barak Obama')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders <Profile/> with populated data but misc profile image', () => {
		const { container, getByText, getByTestId } = render(
			<Profile>
				<Profile.Title>Who's watching?</Profile.Title>
				<Profile.List>
					<Profile.User onClick={() => {}}>
						<Profile.Image data-testid="profile-image-misc" />
						<Profile.Name>Barak Obama</Profile.Name>
					</Profile.User>
				</Profile.List>
			</Profile>
		);

		expect(getByText("Who's watching?")).toBeTruthy();
		expect(getByTestId('profile-image-misc')).toBeTruthy();
		expect(getByText('Barak Obama')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
