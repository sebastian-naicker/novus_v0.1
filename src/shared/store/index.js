import React, { createContext, useState, useEffect } from 'react'
import state from './state'
import App from '@root/app'
import Loader from '@components/loader'
import { loadState, saveState } from '@store/helpers'

const initialState = { ...state }

export const StoreContext = createContext(initialState)

export default () => {
	const persistedState = loadState(initialState)
	const [appState, setState] = useState(persistedState)
	const [appLoading, setAppLoading] = useState(false)
	const [persistState, setPersistState] = useState(false)

	const triggerAsync = (on = true) => {
		setAppLoading(on)
	}

	const updateState = (state, store) => {
		setState((st) => ({
			...st,
			[store]: { ...appState[store], ...state },
		}))
	}

	const persist = (nuc) => async (...args) => {
		const nucData = await nuc({ store: updateState, triggerAsync }, true)(...args)
		if (!nucData) return
		const currentPersistedData = loadState()
		saveState({
			...currentPersistedData,
			[nucData.state]: { ...appState[nucData.state], [nucData.property]: nucData.value },
		})
		return nucData.value
	}

	useEffect(() => {
		if (persistState) {
			saveState(appState)
		}
	}, [appState])

	return (
		<StoreContext.Provider
			value={{
				state: { ...appState },
				store: updateState,
				triggerAsync,
				persist,
				persistAllState: () => setPersistState(true),
			}}
		>
			{appLoading && <Loader />}
			<App />
		</StoreContext.Provider>
	)
}
