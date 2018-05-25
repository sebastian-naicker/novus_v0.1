import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'config';

export default () => (
	<Router>
		<Switch>
			{routes.map((route, i) => (
				<Route key={i} exact {...route} />
			))}
		</Switch>
	</Router>
);
