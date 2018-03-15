/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars */

import React from 'react';
import lifecycle from 'utils/lifecycle';
import Layout from './layout';

const willMount = () => {
	console.log('mounted');
};

export default lifecycle()(Layout);
// connect()(wrappedComponent);
