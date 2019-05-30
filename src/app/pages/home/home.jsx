import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
	componentDidMount() {
		this.props.didMount();
	}

	componentWillUnmount() {
		this.props.willUnmount();
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
	willUnmount: () => {},
};

Home.propTypes = {
	title: PropTypes.string,
	willUnmount: PropTypes.func,
};

export default Home;
