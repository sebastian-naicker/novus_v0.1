import { apiFactory } from '@utils/api';
import { persistFactory } from '@store/helpers';
import * as actions from './actions'

const getUsersRequest = agent => () => agent.get('/api/users/')

export const getUsers = ({ store, triggerAsync }, shouldStore) => {
	triggerAsync()
	return apiFactory(getUsersRequest, '', ({ data }) => {
		triggerAsync(false)
		if (shouldStore) store(actions.getUsers({ userList: data }), 'users')
		return persistFactory('users', 'userList', data)
	})
}
