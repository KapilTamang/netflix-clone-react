import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
	const { firebase } = useContext(FirebaseContext);

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = email === '' || password === '';

	//Form Validaton
	const signInHandler = (e) => {
		e.preventDefault();

		//Firebase Authentication
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
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
					<Form.Title>Sign In</Form.Title>
					{error ? <Form.Error>{error}</Form.Error> : null}
					<Form.Base onSubmit={signInHandler}>
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
							Sign In
						</Form.Submit>
						<Form.Text>
							New to Netflix? &nbsp;
							<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
							<Form.TextSmall>
								This page is protected by Google reCAPTCHA to ensure you're not
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
