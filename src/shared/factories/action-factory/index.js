const env = process.env.NODE_ENV
const actionFactory = (type, payload) => {
	if (env.includes('dev')) console.info(`store/${type}`, { type, payload })
	return { ...payload }
};

export default actionFactory;
