import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'films';

const slideRows = [
	{
		title: 'Thriller',
		data: [
			{
				description: 'Joker description',
				genre: 'thriller',
				docId: '14YSyR6OH25BSQWQ5Xzx',
				id: '6a4bf6a5-b9f6-4eeb-bbd3-80cba3b9b645',
				maturity: '15',
				slug: 'joker',
				title: 'Joker',
			},
		],
	},
	{
		title: 'Children',
		data: [
			{
				description: 'Frozen description',
				genre: 'children',
				docId: 'MebFh7Ve4IFBMDl9PHSt',
				id: '845507bf-f3cc-40de-b633-485a06449a27',
				maturity: '0',
				slug: 'frozen',
				title: 'Frozen',
			},
		],
	},
];

describe('<Card/>', () => {
	it('renders <Card/> with populated data.', () => {
		const { container, getByText } = render(
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image
										src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src="/videos/test.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
		);

		expect(getByText('Thriller')).toBeTruthy();
		expect(getByText('Joker')).toBeTruthy();
		expect(getByText('Joker description')).toBeTruthy();

		expect(getByText('Children')).toBeTruthy();
		expect(getByText('Frozen')).toBeTruthy();
		expect(getByText('Frozen description')).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the <Card/> and toggles the card feature', () => {
		const { container, queryByText, queryByTestId, getByAltText } = render(
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item
									key={item.docId}
									item={item}
									data-testid={`${item.slug}-item-feature`}
								>
									<Card.Image
										src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src="/videos/test.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
		);

		expect(queryByTestId('player')).toBeFalsy();
		fireEvent.click(queryByTestId('joker-item-feature'));
		expect(queryByText('15')).toBeTruthy();

		fireEvent.click(getByAltText('Close'));
		expect(queryByText('15')).toBeFalsy();

		fireEvent.click(queryByTestId('frozen-item-feature'));
		expect(queryByText('PG')).toBeTruthy();

		fireEvent.click(getByAltText('Close'));
		expect(queryByText('PG')).toBeFalsy();
	});
});
