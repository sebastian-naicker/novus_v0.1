import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { getUsers } from '@shared/api/users';
import memoized from '@hocs/enhanced-components/memoized'
import withStore from '@hocs/enhanced-components/withStore';

const UserList = ({ users, ...store }) => {
	useEffect(() => {
		getUsers(store, true)
	}, [])

	return (
		<div>
			<ul>
				{users.hasOwnProperty('userList') && users.userList.map(user => (
					<li key={user.id}>{user.first_name}</li>
				))}
			</ul>
		</div>
	);
};

UserList.defaultProps = {
	users: []
}

UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({}))
}

export default memoized(withStore(UserList))
