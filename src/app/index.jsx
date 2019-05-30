import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'config';
import { Header, Footer } from 'common/components';

export default () => (
	<Router>
		<React.Fragment>
			<Header />
			<Switch>
				{routes.map((route, i) => <Route key={i} {...route} />)}
			</Switch>
			<Footer />
		</React.Fragment>
	</Router>
);
