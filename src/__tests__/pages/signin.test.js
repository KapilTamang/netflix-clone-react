import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowseRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { SignIn } from '../../pages';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({}),
}));

const firebase = {
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest.fn(() =>
			Promise.resolve('I am singed in!')
		),
	})),
};

describe('<SignIn/>', () => {
	it('renders the sign in page with a form submission', () => {
		const { getByTestId, getByPlaceholderText, queryByTestId } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<SignIn />
				</FirebaseContext.Provider>
			</Router>
		);
	});
});
