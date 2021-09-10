import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProfileContainer } from '../../containers/profile';

jest.mock('react-router-dom');

describe('<Profile/>', () => {
	it('renders <Profile/>', () => {
		const user = { displayName: 'Sanam', photoURL: '3.png' };
		const setProfile = jest.fn();
		const { getByTestId } = render(
			<ProfileContainer user={user} setProfile={setProfile} />
		);

		fireEvent.click(getByTestId('user-profile'));
		expect(setProfile).toHaveBeenCalled();
	});
});
