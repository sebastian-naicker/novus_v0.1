const storeLocal = (key, data) => {
	const { localStorage } = window;
	const sanitizedData = JSON.stringify(data);
	localStorage.setItem(key, sanitizedData);
};

const getLocal = (key) => window.localStorage.getItem(key);

export default { storeLocal, getLocal };
