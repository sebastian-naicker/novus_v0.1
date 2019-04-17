import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'config';

const Header = () => (
	<header>
		<nav>
			<ul>
				{routes.map(({ path, title }, i) => title && <li key={i}><Link to={path}>{title}</Link></li>)}
			</ul>
		</nav>
	</header>
);


export default Header;
