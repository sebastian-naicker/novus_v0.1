import React, { Component } from 'react';

export default ({ didMount, willReceiveProps, shouldUpdate, willUpdate, didUpdate, willUnmount }) => WrappedComponent =>
	class Lifecycle extends Component {
		componentDidMount () {
			if (!didMount) return;
			this.props[didMount]();
		}

		componentWillReceiveProps (nextProps) {
			if (!willReceiveProps) return;
			this.props[willReceiveProps](nextProps);
		}

		shouldComponentUpdate (nextProps, nextState) {
			if (!shouldUpdate) return true;
			return this.props[shouldUpdate](nextProps, nextState);
		}

		componentWillUpdate (nextProps, nextState) {
			if (!willUpdate) return;
			this.props[willUpdate](nextProps, nextState);
		}

		componentDidUpdate (prevProps, prevState) {
			if (!didUpdate) return;
			this.props[didUpdate](prevProps, prevState);
		}

		componentWillUnmount () {
			if (!willUnmount) return;
			this.props[willUnmount]();
		}

		render () {
			return <WrappedComponent {...this.props} />;
		}
	};
