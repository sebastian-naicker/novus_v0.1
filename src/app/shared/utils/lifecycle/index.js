import React, { Component } from 'react';

// eslint-disable-next-line
const lifecycle = (
	willMount = () => {},
	didMount = () => {},
	willUnmount = () => {},
	willReceiveProps = () => {},
	shouldUpdate = () => {},
	willUpdate = () => {},
) => Hoc => class extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		willMount();
	}

	componentDidMount() {
		didMount();
	}

	componentWillReceiveProps() {
		willReceiveProps();
	}

	shouldComponentUpdate() {
		shouldUpdate();
	}

	componentWillUpdate() {
		willUpdate();
	}

	componentWillUnmount() {
		willUnmount();
	}

	render() {
		return <Hoc {...this.props} />;
	}
};

export default lifecycle;
