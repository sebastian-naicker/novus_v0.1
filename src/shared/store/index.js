import React, { createContext, useState } from 'react'
import app from './app'
import App from '@root/app'
import Loader from '@components/loader';

export const StoreContext = createContext({ ...app })

export default () => {
	const [appState, setState] = useState({ ...app })
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

