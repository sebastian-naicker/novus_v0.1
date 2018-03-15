import React from 'react';
import lifecycle from 'utils/lifecycle';
import Layout from './layout';

const willMount = () => {
	console.log('will mount');
};

const didMount = () => {
	console.log('did mount');
};

export default lifecycle({ willMount, didMount })(Layout);
