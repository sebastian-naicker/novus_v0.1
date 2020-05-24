import React, { useEffect } from 'react';
import memoized from '@hocs/enhanced-components/memoized'

const UserList = ({ users }) => {
	useEffect(() => {
		console.log('rendered')
	})

	return (
		<div>
			<ul>
				{users.hasOwnProperty('userList') && users.userList.map(user => (
					<li key={user.id}>{user.title}</li>
				))}
			</ul>
		</div>
	);
};

export default memoized(UserList)
