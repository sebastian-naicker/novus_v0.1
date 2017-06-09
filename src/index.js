import {getUsers, deleteUser} from './api/userApi';

getUsers().then( result => {
	let usersBody = "";

	result.forEach( user => {
		usersBody+=`<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});

	global.document.getElementById('users').innerHTML = usersBody;
	let deleteLinks = global.document.getElementsByClassName('deleteUser');

	Array.from(deleteLinks, link => {

		link.onclick = (event) => {
			let elem = event.target;
			event.preventDefault();
			deleteUser(elem.dataset.id)
			let row = elem.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}

	});

});
