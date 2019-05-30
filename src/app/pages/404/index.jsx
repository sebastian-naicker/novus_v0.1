import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
	<div className='panel'>
		<h1>Oops! We could not find the page you're looking for</h1>
		<p>You can try going back home, by clicking <Link to="/">here</Link> </p>
	</div>
);


export default Page404;
