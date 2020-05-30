import React from 'react';
import Logo from '@svgs/logo-2.svg'
import { withStore } from '@hocs/enhanced-components'
import UserList from '@components/userList';

const Home = ({ state: { users }, ...store }) => {
	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
				{JSON.stringify(users)}
			</div>
			<UserList />
		</div>
	);
}

export default withStore(Home)
