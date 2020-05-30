import React, { useEffect, useState } from 'react';
import withStore from '@hocs/enhanced-components/withStore';
import { getGenres } from '@nucs/genres'
import { setThemeMode } from '@nucs/theme';
import theme from '@constants/theme'
import StatusBar from '@components/statusbar';

const Genres = ({ state: { books }, ...store }) => {
	const [hasError, setHasError] = useState(false)

	const loadGenres = () => {
		setHasError(false)
		getGenres(store, true)
	}

	const setTheme = (mode) => {
		setThemeMode(store, true)(mode)
	}

	useEffect(() => {
		loadGenres()
	}, [])

	useEffect(() => {
		if (books.error) setHasError(true)
	}, [books])

	return (
		<div>
			{hasError && <StatusBar statusType='error' message={books.error || ''} isVisible autoHide />}
			<p>rendering genres</p>
			<p>{JSON.stringify(books)}</p>
			<button onClick={() => setTheme(theme.DARK)}>Change theme dark</button>
			<button onClick={() => setTheme(theme.LIGHT)}>Change theme light</button>
		</div>
	);
};

export default withStore(Genres);
