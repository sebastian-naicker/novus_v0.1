const reducerFactory = (initialState, types) => (state = {}, { type, payload }) => {
	if (type.includes('RESET')) return { ...initialState };
	else if (type in types) return { ...state, ...payload };

	return { ...initialState };
};

export default reducerFactory;
