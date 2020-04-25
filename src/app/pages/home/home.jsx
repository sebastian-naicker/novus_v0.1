import React, { useEffect } from 'react'
import Logo from '@svgs/logo-2.svg'
import UserList from '@components/userList'
import { withStore } from '@app-enhancements'
import { getUsers } from '@shared/api/users'
import { Link } from 'react-router-dom';

const Home = (props) => {
	useEffect(() => {
		if (props.users.userList[0]) return
		getUsers(props, true)
	}, [])

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<Link to='/about'>about</Link>
			<UserList />
			<button>trigger state update</button>
		</div>
	);
}

export default withStore(Home)
