import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
	componentDidMount() {
		this.props.didMount();
	}

	render() {
		const { title } = this.props;
		return (
			<div className='panel'>
				<h1>{title}</h1>
			</div>
		);
	}
}

Home.defaultProps = {
	title: '',
};

Home.propTypes = {
	title: PropTypes.string,
};

export default Home;
