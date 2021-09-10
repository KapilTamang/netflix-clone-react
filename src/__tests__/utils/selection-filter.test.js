import selectionFilter from '../../utils/selection-filter';

test('selectonFilter with legitimate data', () => {
	const films = [
		{
			id: 'film-1x',
			title: 'The Prestige',
			description: 'Awesome film',
			genre: 'drama',
			maturity: '15',
			slug: 'the-prestige',
		},
	];

	const series = [
		{
			id: 'series-1x',
			title: 'Super Size Me',
			description: 'Awesome series',
			genre: 'documentaries',
			maturity: '12',
			slug: 'super-size-me',
		},
	];

	const slides = selectionFilter({ films, series });
	//Films
	expect(slides.films[0].title).toBe('Drama');
	expect(slides.films[0].data[0].id).toBe('film-1x');
	expect(slides.films[0].data[0].description).toBe('Awesome film');
	expect(slides.films[0].data[0].title).toBe('The Prestige');
	expect(slides.films[0].data[0].genre).toBe('drama');
	expect(slides.films[0].data[0].maturity).toBe('15');
	expect(slides.films[0].data[0].slug).toBe('the-prestige');
	//Series
	expect(slides.series[0].title).toBe('Documentaries');
	expect(slides.series[0].data[0].id).toBe('series-1x');
	expect(slides.series[0].data[0].description).toBe('Awesome series');
	expect(slides.series[0].data[0].title).toBe('Super Size Me');
	expect(slides.series[0].data[0].genre).toBe('documentaries');
	expect(slides.series[0].data[0].maturity).toBe('12');
	expect(slides.series[0].data[0].slug).toBe('super-size-me');
});

test('selectionFilter with no data', () => {
	const slides = selectionFilter();

	expect(slides.films[0].title).toBe('Drama');
	expect(slides.series[0].title).toBe('Documentaries');
	expect(slides.films[0].data).toBe(undefined);
	expect(slides.series[0].data).toBe(undefined);
});
