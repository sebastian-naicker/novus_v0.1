import React, { createContext, useState } from 'react'
import state from './state'
import App from '@root/app'
import Loader from '@components/loader';

const initialState = { ...state }

export const StoreContext = createContext(initialState)
export default () => {
	const [appState, setState] = useState(initialState)
	const [appLoading, setAppLoading] = useState(false)

	const triggerAsync = (on = true) => {
		setAppLoading(on)
	}

	const updateState = (state, store) => {
		setState({
			...appState,
			[store]: { ...appState[store], ...state }
		})
	}

	return (
		<StoreContext.Provider value={{ ...appState, store: updateState, triggerAsync }}>
			{appLoading && <Loader />}
			<App />
		</StoreContext.Provider>
	)
}

