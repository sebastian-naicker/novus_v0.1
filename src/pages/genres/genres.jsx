import React, { useEffect, useState } from 'react';
import withStore from '@hocs/enhanced-components/withStore';
import { getGenres } from '@nucs/genres'
import StatusBar from '@components/statusbar';

const Genres = ({ state: { books }, ...store }) => {
	const [hasError, setHasError] = useState(false)

	const loadGenres = () => {
		setHasError(false)
		getGenres(store, true)
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
			<button onClick={loadGenres}>Load Genres</button>
		</div>
	);
};

export default withStore(Genres);
