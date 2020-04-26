import React, { lazy, Suspense } from 'react';
import Loading from '@components/loader';

const enhancedRoute = name => {
	const Component = lazy(() => import(`../../../pages/${name}`))

	return class extends React.Component {
		render() {
			return (
				<Suspense fallback={<Loading />}>
					<Component />
				</Suspense>
			);
		}
	};
};


export default enhancedRoute;
