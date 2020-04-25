import requestWrapper from './wrapper';

export const callApi = request => {
	const authToken = 'TOKEN stringoverhere';
	return request(requestWrapper(authToken));
};

export const apiFactory = (request, payload, resolve) =>
	callApi(request)(payload)
		.then(resolve)

export default callApi;
