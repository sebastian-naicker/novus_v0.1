import React, { useEffect } from 'react';
import withStore from '@hocs/enhanced-components/withStore';

const Genres = ({ state: { genres } }) => {
	useEffect(() => {
		console.log(genres)
	}, [])

	return (
		<div>
			<p>rendering genres</p>
		</div>
	);
};

export default withStore(Genres);
