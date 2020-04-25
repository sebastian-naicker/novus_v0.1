import React from 'react';
import { StoreContext } from '@store'

const withStore = (Component) => {
	return (props) => (
		<StoreContext.Consumer>
			{state => (
				<Component {...state} {...props} />
			)}
		</StoreContext.Consumer>
	);
};

export default withStore;
