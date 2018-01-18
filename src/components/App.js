/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars */

import React from 'react';
import AddUser from './users/AddUser';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = App.initialState();
	}

	static initialState() {
		return {
			users: [],
			user: {
				userId: 1,
				name: '',
				surname: '',
				email: ''
			}
		}
	}

	addUser(user) {

	}

	render() {
		return(
			<div>
				<h1>Users</h1>
				<AddUser user={this.state.user} />
				<table className="table">
					<thead>
						<th>&nbsp;</th>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</thead>



				</table>
			</div>
		);
	}

}

export default App;
