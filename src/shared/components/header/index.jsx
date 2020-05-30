import React, { useEffect } from 'react'
import cc from '@utils/styles'
import { withStore } from '@hocs/enhanced-components'
import { setThemeMode } from '@nucs/theme'
import THEME from '@constants/theme'
import ToggleSwitch from '@components/toggleSwitch'

const Header = ({ state: { theme }, isVisible, ...store }) => {
	const toggleDarkTheme = (mode) => {
		const root = document.body
		root.style.setProperty('--theme', `var(--theme-${mode})`)
		root.style.setProperty('--theme-font', `var(--theme-font-${mode})`)
		setThemeMode(store, true)(mode)
	}

	useEffect(() => {
		toggleDarkTheme(theme.displayMode)
	}, [])

	return (
		<React.Fragment>
			{isVisible && (
				<header className={cc('header')}>
					<ToggleSwitch
						label='Light / Dark'
						handleToggleOn={() => toggleDarkTheme(THEME.DARK)}
						handleToggleOff={() => toggleDarkTheme(THEME.LIGHT)}
					/>
				</header>
			)}
		</React.Fragment>
	)
}

export default withStore(Header)
