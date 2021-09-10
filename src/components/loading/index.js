import React from 'react';
import { Spinner, LockBody, ReleaseBody, Image } from './styles/loading';

export default function Loading({ src, restProps }) {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Image src={`/images/users/${src}.png`} data-testid="loading-image" />
		</Spinner>
	);
}

Loading.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};
