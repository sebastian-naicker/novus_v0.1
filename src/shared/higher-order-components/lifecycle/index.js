import React, { Component } from 'react';

export default ({ didMount, willReceiveProps, shouldUpdate, willUpdate, didUpdate, willUnmount, ...props }) => WrappedComponent =>
	class Lifecycle extends Component {
		componentDidMount () {
			if (!didMount) return;
			didMount();
		}

		componentWillReceiveProps (nextProps) {
			if (!willReceiveProps) return;
			willReceiveProps(nextProps);
		}

		shouldComponentUpdate (nextProps, nextState) {
			if (!shouldUpdate) return true;
			return shouldUpdate(nextProps, nextState);
		}

		componentWillUpdate (nextProps, nextState) {
			if (!willUpdate) return;
			willUpdate(nextProps, nextState);
		}

		componentDidUpdate (prevProps, prevState) {
			if (!didUpdate) return;
			didUpdate(prevProps, prevState);
		}

		componentWillUnmount () {
			if (!willUnmount) return;
			willUnmount();
		}

		render () {
			return <WrappedComponent {...props} />;
		}
	};
