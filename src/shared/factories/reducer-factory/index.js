const reducerFactory = (initialState, types) => (state = {}, { type, payload }) => {
	console.log(payload, types, type);
	if (type in types) return { ...state, ...payload };
	return { ...initialState };
};

export default reducerFactory;
