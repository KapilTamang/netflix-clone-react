import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	max-width: 80%;
`;

export const Title = styled.h1`
	width: 100%;
	font-size: 48px;
	text-align: center;
	font-weight: 500;
`;

export const List = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 150px;
    border 3px solid black;
    cursor: pointer;
`;

export const Name = styled.p`
	color: #808080;
	text-overfolow: ellipsis;
	font-size: 16px;
`;

export const Item = styled.li`
	max-width: 200px;
	max-height: 200px;
	list-style-type: none;
	text-align: center;
	margin-right: 30px;

	&:hover > ${Image} {
		border: 3px solid white;
	}

	&:hover > ${Name} {
		color: white;
		font-weight: bold;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;
