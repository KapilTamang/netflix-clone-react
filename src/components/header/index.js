import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	Background,
	Container,
	Group,
	Logo,
	ButtonLink,
	Feature,
	FeatureCallOut,
	Text,
	Link,
	Image,
	Profile,
	Dropdown,
	Search,
	SearchIcon,
	SearchInput,
	PlayButton,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? (
		<Background {...restProps} data-testid="header-bg">
			{children}
		</Background>
	) : (
		children
	);
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
	children,
	...restProps
}) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Image = function HeaderImage({ src, children, ...restProps }) {
	return (
		<Image {...restProps} src={`/images/users/${src}.png`}>
			{children}
		</Image>
	);
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<Search {...restProps}>
			<SearchIcon
				onClick={() => setSearchActive(!searchActive)}
				data-testid="search-click"
			>
				<img
					src="/images/icons/search.png"
					alt="Search"
					data-testid="search-icon"
				/>
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search films and series"
				active={searchActive}
				data-testid="search-input"
			></SearchInput>
		</Search>
	);
};
