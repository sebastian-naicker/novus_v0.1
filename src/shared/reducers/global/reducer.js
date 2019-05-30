import { RESTORE_APP } from './actions';

const initialState = {
	pageTitle: 'Home',
};

/* eslint-disable */
const app = (state = {}, { type, payload }) => {
	switch (type) {
		case RESTORE_APP: return {
			...initialState,
		};
		default: return {
			...initialState
		};
	}
};

export default app;
