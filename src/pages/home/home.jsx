import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Logo from '@svgs/logo-alt.svg'
import LogoDark from '@svgs/logo-alt-dark.svg'
import UserList from '@components/userList'
import THEME from '@constants/theme'
import cc from '@utils/styles'
import { getGenres } from '@nucs/genres'
import { withStore } from '@hocs/enhanced-components'

const Home = ({ state: { books, theme }, ...store }) => {
	useEffect(() => {
		getGenres(store, true)
	}, [])

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				{theme.displayMode === THEME.DARK && <LogoDark className={cc('logo')} />}
				{theme.displayMode === THEME.LIGHT && <Logo className={cc('logo')} />}
			</div>
			<ol>
				{books.genres.map((book) => (
					<li key={book.id}>{book.title}</li>
				))}
			</ol>
			<UserList />
		</div>
	)
}

Home.defaultProps = {
	state: {},
}

Home.propTypes = {
	state: PropTypes.shape({}),
}

export default withStore(Home)
