import React from 'react';
import { Container, Title, List, Item, Image, Name } from './styles/profile';

export default function Profile({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Profile.Image = function ProfileImage({ src, children, ...restProps }) {
	return (
		<Image
			{...restProps}
			src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
		>
			{children}
		</Image>
	);
};

Profile.Name = function ProfileName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
