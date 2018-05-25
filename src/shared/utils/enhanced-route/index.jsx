import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'common/components/loader';

const enhancedRoute = name => {
	const Component = Loadable({ // eslint-disable-line
		loader: () => import(`pages/${name}`),
		loading: Loading,
	});

	return class extends React.Component {
		render() {
			return (
				<Component />
			);
		}
	};
};


export default enhancedRoute;
