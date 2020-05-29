import { apiFactory } from '@utils/api';
import * as actions from './actions'

const getUsersRequest = agent => () => agent.get('/api/status/')

export const getUsers = ({ store, triggerAsync }, shouldStore) => {
	triggerAsync()
	return apiFactory(getUsersRequest, '', ({ data: { data } }) => {
		triggerAsync(false)
		if (shouldStore) store(actions.getUsers({ userList: data }), 'users')
		return data
	})
}
