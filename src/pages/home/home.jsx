import React, { useEffect } from 'react';
import Logo from '@svgs/logo-2.svg'
import UserList from '@components/userList';
import { getGenres } from '@nucs/genres';
import { withStore } from '@hocs/enhanced-components';

const Home = ({ state: { books }, ...store }) => {
	useEffect(() => {
		store.persist(getGenres)
	}, [])

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<UserList />
		</div>
	);
}

export default withStore(Home)
