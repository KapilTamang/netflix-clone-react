import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { Profile } from '../components';

export function ProfileContainer({ user, setProfile }) {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
				</Header.Frame>
			</Header>
			<Profile>
				<Profile.Title>Who's watching?</Profile.Title>
				<Profile.List>
					<Profile.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoURL: user.photoURL,
							})
						}
						data-testid="user-profile"
					>
						<Profile.Image src={user.photoURL} />
						<Profile.Name>{user.displayName}</Profile.Name>
					</Profile.User>
				</Profile.List>
			</Profile>
		</>
	);
}
