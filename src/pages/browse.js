import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import SelectionFilter from '../utils/selection-filter';

export default function Browse() {
	const { films } = useContent('films');
	const { series } = useContent('series');

	const slides = SelectionFilter({ films, series });

	return <BrowseContainer slides={slides}></BrowseContainer>;
}
