import React from 'react';
import PropTypes from 'prop-types';
import cc from 'utils/styles';
import Spinner from '@svgs/loader.svg';

const Loader = ({ withText }) => (
	<div className={cc('loader')}>
		<div className={cc('loader-icon')}>
			<Spinner />
			{withText && <p>Loading...</p>}
		</div>
	</div>
);

Loader.defaultProps = {
	withText: false,
};

Loader.propTypes = {
	withText: PropTypes.bool
};

export default Loader;
