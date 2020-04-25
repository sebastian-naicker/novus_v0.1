const actionFactory = (type, payload) => {
	console.info(`store/${type}`, { type, payload })
	return { ...payload }
};

export default actionFactory;
