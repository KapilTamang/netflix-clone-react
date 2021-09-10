import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		top left / cover no-repeat;

	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && 'background: none;'}
	}
`;

export const Frame = styled.div``;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 100px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	width: 90px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	box-sizing: border-box;

	&:hover {
		background-color: #f40412;
	}
`;

export const Feature = styled(Container)`
	padding: 150px 0 500px 0;
	flex-direction: column;
	align-items: normal;
	width: 50%;

	@media (max-width: 1100px) {
		display: none;
	}
`;

export const FeatureCallOut = styled.h2`
	color: white;
	font-size: 50px;
	line-height: normal;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
	margin-bottom: 20px;
`;

export const PlayButton = styled.button`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: #e6e6e6;
	color: #000;
	border-width: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 130px;
	font-size: 20px;
	font-weight: bold;
	margin-top: 30px;
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		transition: 0.3s ease;
		background-color: #ff1e1e;
		color: white;

		img {
			color: #fff;
		}
	}

	img {
		width: 22px;
		margin-right: 5px;
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const Link = styled.p`
	color: white;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active === true ? 'bold' : 'normal')};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}

	&:last-of-type: {
		margin: 0;
	}
`;

export const Image = styled.button`
	background: url(${({ src }) => src});
	background-size: contain;
	border: 0;
	width: 32px;
	height: 32px;
`;

export const Dropdown = styled.div`
	display: none;
	background-color: black;
	position: absolute;
	padding: 10px;
	width: 150px;
	top: 32px;
	right: 10px;

	${Group} {
		margin-bottom: 15px;

		&:last-of-type {
			margin-bottom: 0;
		}

		&:last-of-type ${Link} {
			cursor: pointer;
		}

		${Link}, ${Image} {
			cursor: default;
		}
	}

	button {
		margin-right: 10px;
	}

	p {
		font-size: 12px;
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export const Search = styled.div`
	display: flex;
	align-items: center;

	svg {
		color: white;
		cursor: pointer;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(1);
		width: 16px;
	}
`;

export const SearchInput = styled.input`
	background-color: #44444459;
	color: white;
	transition: width 0.5s;
	border: 1px solid white;
	height: 30px;
	font-size: 14px;
	width: ${({ active }) => (active === true ? '200px' : '0')};
	margin-left: ${({ active }) => (active === true ? '10px' : '0')};
	padding: ${({ active }) => (active === true ? '0 10px' : '0')};
	opacity: ${({ active }) => (active === true ? '1' : '0')};
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}

	button {
		cursor: pointer;
	}
`;
