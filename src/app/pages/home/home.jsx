import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '@svgs/logo-2.svg'
import { withStore } from '@app-enhancements';
import { getUsers } from '@shared/api/users';

const Home = (props) => {
	const [users, setUsers] = useState([])

	const handleClick = async () => {
		const data = await getUsers(props, true)
		console.log('users', data)
	}

	useEffect(() => {
		if (props.hasOwnProperty('users')) {
			setUsers(props.users.userList)
		}
	}, [props])

	return (
		<div className='panel'>
			{console.log(props)}
			<div className='logo-wrapper'>
				<Logo />
			</div>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user}</li>
				))}
			</ul>
			<button onClick={handleClick}>trigger state update</button>
		</div>
	);
}

Home.defaultProps = {
	title: '',
};

Home.propTypes = {
	title: PropTypes.string,
};

export default withStore(Home);
