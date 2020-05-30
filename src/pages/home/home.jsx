import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import Logo from '@svgs/logo-2.svg'
import UserList from '@components/userList';
import { getGenres } from '@nucs/genres';
import { withStore } from '@hocs/enhanced-components';

const Home = ({ state: { books }, ...store }) => {
	useEffect(() => {
		getGenres(store, true)
	}, [])

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<ol>
				{books.genres.map(book => (
					<li key={book.id}>{book.title}</li>
				))}
			</ol>
			<UserList />
		</div>
	);
}

Home.defaultProps = {
	state: {}
}

Home.propTypes = {
	state: PropTypes.shape({})
}

export default withStore(Home)
