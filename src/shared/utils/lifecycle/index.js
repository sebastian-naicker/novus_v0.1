import React, { Component } from 'react';

const isDefined = func => (func && typeof func === 'function');

const lifecycle = ({
	willMount,
	didMount,
	willUnmount,
	willReceiveProps,
	shouldUpdate,
	willUpdate,
}) => WrapperComponent => class extends Component {
	constructor(props) {
		super(props);
		this.componentWillMount = isDefined(willMount) ? this.componentWillMount : undefined;
		this.componentDidMount = isDefined(didMount) ? this.componentDidMount : undefined;
		this.componentWillReceiveProps = isDefined(willReceiveProps) ? this.componentWillReceiveProps : undefined;
		this.shouldComponentUpdate = isDefined(shouldUpdate) ? this.shouldComponentUpdate : undefined;
		this.componentWillUpdate = isDefined(willUpdate) ? this.componentWillUpdate : undefined;
		this.componentWillUnmount = isDefined(willUnmount) ? this.componentWillUnmount : undefined;
	}

	componentWillMount() { willMount(); }
	componentDidMount() { didMount(); }
	componentWillReceiveProps() { willReceiveProps(); }
	shouldComponentUpdate() { shouldUpdate(); }
	componentWillUpdate() { willUpdate(); }
	componentWillUnmount() { willUnmount(); }

	render() {
		return <WrapperComponent {...this.props} />;
	}
};

export default lifecycle;
