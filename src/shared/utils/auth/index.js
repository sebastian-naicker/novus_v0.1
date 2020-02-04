import ls from 'local-storage';

export const isLoggedIn = () => {
	let loggedIn = ls.get('TOKEN');
	return !!loggedIn;
};
