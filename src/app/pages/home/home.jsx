import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
	render() {
		const { pageTitle } = this.props;
		return (
			<div>
				<h1>{pageTitle}</h1>
			</div>
		);
	}
}

Home.defaultProps = {
	pageTitle: '',
};

Home.propTypes = {
	pageTitle: PropTypes.string,
};

export default Home;
