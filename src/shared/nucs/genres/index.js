import { apiFactory } from '@utils/api'
import { persistFactory } from '@store/helpers'
import * as actions from './actions'

const getGenresRequest = (agent) => () => agent.get('/api/genres/')

export const getGenres = ({ store, triggerAsync }, shouldStore) => (value) => {
	console.log('VALUE', value)
	triggerAsync()
	return apiFactory(getGenresRequest, '', ({ data }) => {
		triggerAsync(false)
		if (shouldStore) store(actions.getGenres({ genres: data, error: undefined }), 'books')
		return persistFactory('books', 'genres', data)
	}).catch((err) => {
		triggerAsync(false)
		if (shouldStore) store(actions.getGenresError({ error: err.message }), 'books')
		return persistFactory('books', 'error', err.message)
	})
}
