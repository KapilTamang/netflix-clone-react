import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
	const { firebase } = useContext(FirebaseContext);

	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = firstName === '' || email === '' || password === '';

	//Form Validaton
	const signUpHandler = (e) => {
		e.preventDefault();

		//Firebase Authentication
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					});
			})
			.catch((error) => {
				setFirstName('');
				setEmail('');
				setPassword('');
				setError(error.message);
				setTimeout(() => {
					setError('');
				}, 3000);
			});
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={signUpHandler}>
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<Form.Input
							placeholder="Email or phone number"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							autoComplete="off"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user? &nbsp;
							<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
							<Form.TextSmall>
								This page is protected by Google reCAPTCHA to ensure yout're not
								a bot.&nbsp;<Form.Link>Learn more.</Form.Link>
							</Form.TextSmall>
						</Form.Text>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
