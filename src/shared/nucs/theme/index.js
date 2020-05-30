import * as actions from './actions'

export const setThemeMode = ({ store, triggerAsync }, shouldStore) => (displayMode) => {
	if (shouldStore) store(actions.setThemeMode({ displayMode }), 'theme')
}
