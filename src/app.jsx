import React, { useState } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import PrivateRoute from '@shared/components/privateRoute'
import history from '@setup/history'
import { routes } from 'routes'
import { isLoggedIn } from '@utils/auth'
import { Footer, Header } from '@components';
import StatusBar from '@components/statusbar';
import Loader from '@components/loader';

export default () => {
	const [isAppLoading] = useState(false)
	const [appData] = useState({
		message: ''
	})

	return (
		<Router history={history}>
			<div id='header-portal' />
			{isAppLoading && <Loader />}
			<StatusBar
				statusType={appData.status || 'warning'}
				message={appData.message}
				isVisible={appData.hasOwnProperty('isRegistered')}
				autoHide={appData.status === 'success'}
			/>
			<Header />
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
}
