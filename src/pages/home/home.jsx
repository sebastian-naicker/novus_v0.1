import React, { useEffect } from 'react';
import Logo from '@svgs/logo-2.svg'
import UserList from '@components/userList';
import { withStore } from '@hocs/enhanced-components';

const Home = ({ state: { books } }) => {
	useEffect(() => {
		console.log(books)
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
