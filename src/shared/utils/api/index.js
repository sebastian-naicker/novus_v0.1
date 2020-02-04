import requestWrapper from './wrapper';

export const callApi = request => {
	const authToken = 'TOKEN stringoverhere';
	return request(requestWrapper(authToken));
};

export default callApi;
