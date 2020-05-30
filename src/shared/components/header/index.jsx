import React, { useState, useEffect } from 'react';
import { withStore } from '@hocs/enhanced-components';
import cc from '@utils/styles'

const Header = ({ state: { theme }, ...store }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const root = document.body
		root.style.setProperty('--theme', `var(--theme-${theme.displayMode})`)
		root.style.setProperty('--theme-font', `var(--theme-font-${theme.displayMode})`)
	}, [theme])

	return (
		<header className={cc('header')}>
			<nav>
				<p>some bladdy text</p>
			</nav>
		</header>
	);
}

export default withStore(Header);
