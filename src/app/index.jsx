import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import PrivateRoute from '@utils/privateRoute'
import history from '@setup/history'
import { routes } from '@config'
import { isLoggedIn } from '@utils/auth'
import { Footer } from '@components';

export default () => (
	<Router history={history}>
		<div id='header-portal' />
		<div id='main-content'>
			<React.Fragment>
				<Switch>
					{routes.map(({ isPrivate, ...route }, i) => {
						return isPrivate ? (
							<PrivateRoute key={i} isAuthenticated={isLoggedIn()} {...route} />
						) : (
							<Route key={i} {...route} />
						)
					})}
				</Switch>
			</React.Fragment>
		</div>
		<Footer />
	</Router>
)
