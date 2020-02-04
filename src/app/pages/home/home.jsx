import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@svgs/logo-1.svg'


const Home = ({ title }) => (
	<div className='panel'>
		<div className='logo-wrapper'>
			<Logo />
		</div>
	</div>
);

Home.defaultProps = {
	title: '',
};

Home.propTypes = {
	title: PropTypes.string,
};

export default Home;
