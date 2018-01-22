/**
 * Created by sebastiann on 2017/06/23.
 */

/* eslint-disable no-unused-vars*/

import React from 'react';

const AddUser = (props) => {

	return (
		<div className="userForm form-group">
			<form action="#" className="form">
				<input type="text" placeholder="First name" name="name" className="form-control" value={props.user.name} />
				<input type="text" placeholder="Last name" name="surname" className="form-control" value={props.user.surname} />
				<input type="email" placeholder="email@address.com" name="email" className="form-control" value={props.user.email} />
				<button type="submit" className="btn-primary btn-default btn btn-large">Add</button>
			</form>
		</div>
	);

};

export default AddUser;
