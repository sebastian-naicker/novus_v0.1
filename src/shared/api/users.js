import { apiFactory } from '@utils/api';

const getUsersRequest = agent => () => agent.get('/users/')

export const getUsers = ({ store, triggerAsync }, shouldStore) => {
	triggerAsync()
	return apiFactory(getUsersRequest, '', ({ data }) => {
		triggerAsync(false)
		if (shouldStore) store({ userList: data }, 'users')
		return data
	})
}
