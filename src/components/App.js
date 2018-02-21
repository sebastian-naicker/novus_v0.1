/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars */

import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import AddUser from './pages/users/AddUser';
import UsersList from './pages/users/UsersList';
import Home from './pages/home';

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
			<BrowserRouter>
				<div>
					<h1>Users</h1>
					<AddUser user={this.state.user} />
					<ul>
						<li><Link to="/" >HOME</Link></li>
						<li><Link to="/users" >USERS</Link></li>
					</ul>

					<table className="table">
						<thead>
							<th>&nbsp;</th>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
						</thead>
					</table>
				<Route path="/" component={Home} exact/>
				<Route path="/users" component={UsersList} />
				</div>
			</BrowserRouter>
		);
	}

}

export default App;
