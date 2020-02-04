const reducerFactory = (initialState, types) => (state = {}, { type, payload }) => {
	if (type in types && type.includes('RESET')) return { ...initialState };
	else if (type in types && type.includes('PENDING')) return { ...state, ...payload, loading: true, error: undefined, success: false };
	else if (type in types && type.includes('SUCCESS')) return { ...state, ...payload, loading: false, success: true };
	else if (type in types && type.includes('ERROR')) return { ...state, loading: false, success: false, error: payload };
	else if (type in types) return { ...state, ...payload };

	return { ...initialState };
};

export default reducerFactory;
