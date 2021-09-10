import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading/>', () => {
	it('renders <Loading/> with populated data.', () => {
		const { container, getByTestId } = render(<Loading src={'obama'} />);

		expect(getByTestId('loading-image')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders <Loading.ReleaseBody/>', () => {
		const { container } = render(<Loading.ReleaseBody />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
