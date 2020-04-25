import React from 'react';
import withStore from '@app-enhancements/withStore';

const UserList = ({ users }) => {
	return (
		<div>
			<ul>
				{users.userList.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default withStore(UserList)
