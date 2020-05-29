export const loadState = defaultState => {
	try {
		const state = localStorage.getItem('app-state')
		if (!state) return defaultState
		const persistedState = JSON.parse(state)
		return { ...defaultState, ...persistedState }
	} catch (e) {
		console.log(e)
	}
}

export const loadPartialState = (stateKey, defaultState, stateStore) => {
	try {
		const state = localStorage.getItem(stateStore)
		const parsedState = JSON.parse(state)
		if (!state) return defaultState
		return parsedState
	} catch (e) {
		console.log(e)
	}
}

export const saveState = (state, stateKey = 'app-state') => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem(stateKey, serializedState)
	} catch (e) {
		console.log(e)
	}
}

export const savePartialState = async (data, stateKey) => {
	try {
		const serializedState = await JSON.stringify({
			...data
		})

		await localStorage.setItem(stateKey, serializedState)
	} catch (e) {
		console.log(e)
	}
}

export const persistFactory = (state, property, value) => ({ state, property, value })
