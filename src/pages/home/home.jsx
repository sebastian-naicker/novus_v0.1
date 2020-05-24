import React, { useState } from 'react';
import Logo from '@svgs/logo-2.svg'
import { withStore } from '@hocs/enhanced-components'
import UserList from '@components/userList';

const Home = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>++</button>
			<UserList />
		</div>
	);
}

export default withStore(Home)
