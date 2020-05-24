import React, { useEffect, useState } from 'react';
import Logo from '@svgs/logo-2.svg'
import { withStore } from '@hocs/enhanced-components'
import UserList from '@components/userList';
import { getUsers } from '@shared/api/users';

const Home = ({ users, store, triggerAsync }) => {
	const [count, setCount] = useState(0)
	const [genres, setGenres] = useState({})

	useEffect(() => {
		getUsers({ store, triggerAsync }, true)
	}, [])

	useEffect(() => {
		setGenres(users)
	}, [users])

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>++</button>
			<UserList users={genres} />
		</div>
	);
}

export default withStore(Home)
