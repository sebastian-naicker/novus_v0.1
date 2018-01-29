/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars */

import React, { Fragment } from 'react';
import lifecycle from 'shared/utils/lifecycle';

const App = () => (
	<Fragment>
		<h1>Hello</h1>
	</Fragment>
);

export default lifecycle()(App);
