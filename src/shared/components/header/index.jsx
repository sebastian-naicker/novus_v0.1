import React from 'react';
import cc from '@utils/styles'

const Header = ({ isVisible }) => {
	return (
		<React.Fragment>
			{isVisible && (
				<header className={cc('header')}>
					<nav>
						<p>some bladdy text</p>
					</nav>
				</header>
			)}
		</React.Fragment>
	);
}

export default Header
