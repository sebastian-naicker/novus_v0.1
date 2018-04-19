import React, { PureComponent } from 'react';

const isDefined = func => (func && typeof func === 'function');

const lifecycle = ({
	willMount,
	didMount,
	willUnmount,
	willReceiveProps,
	willUpdate,
} = {}) =>
	WrapperComponent => class extends PureComponent {
		constructor(props) {
			super(props);
			this.componentWillMount = isDefined(willMount) ? this.componentWillMount : undefined;
			this.componentDidMount = isDefined(didMount) ? this.componentDidMount : undefined;
			this.componentWillReceiveProps = isDefined(willReceiveProps) ? this.componentWillReceiveProps : undefined;
			this.componentWillUpdate = isDefined(willUpdate) ? this.componentWillUpdate : undefined;
			this.componentWillUnmount = isDefined(willUnmount) ? this.componentWillUnmount : undefined;
		}

		componentWillMount() { willMount(); }
		componentDidMount() { didMount(); }
		componentWillReceiveProps() { willReceiveProps(); }
		componentWillUpdate() { willUpdate(); }
		componentWillUnmount() { willUnmount(); }

		render() {
			return <WrapperComponent {...this.props} />;
		}
	};

export default lifecycle;
