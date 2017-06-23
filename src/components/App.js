/**
 * Created by sebastiann on 2017/06/23.
 */

import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Users</h1>
				<table class="table">
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
