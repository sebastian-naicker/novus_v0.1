import axios from 'axios';

const API_URL = process.env.API_URL;

export const wrapper = agent => authToken => {
	if (authToken) {
		axios.defaults.headers.common['Authorization'] = `JWT ${authToken}`;
	}

	axios.defaults.headers.common['Content-Type'] = 'application/json';

	return {
		get: (path, payload) => agent.get(`${API_URL}${path}`, { params: payload }),
		post: (path, payload) => agent.post(`${API_URL}${path}`, payload),
		put: (path, payload) => agent.put(`${API_URL}${path}`, payload),
		patch: (path, payload) => agent.patch(`${API_URL}${path}`, payload),
		delete: (path, payload) => agent.delete(`${API_URL}${path}`, { data: { ...payload } })
	};
};

export default wrapper(axios);
