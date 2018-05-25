import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import enhancedRoutes from './enhanced-routes';

const routes = [
	{
		path: '/',
		exact: true,
		component: enhancedRoutes('home'),
	},
	{
		path: '',
		exact: true,
		component: enhancedRoutes('404'),
	},
];

export default () => (
	<Router>
		<Switch>
			{routes.map((route, i) => (
				<Route key={i} {...route} />
			))}
		</Switch>
	</Router>
);
