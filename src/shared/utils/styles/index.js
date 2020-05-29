export default (classname, conditionalClasses) => {
	const prefix = 'nvs';
	let finalClassList = `${prefix}-${classname}`;
	const classList = [];

	if (conditionalClasses) {
		Object.keys(conditionalClasses).forEach(key => {
			if (conditionalClasses[key] === true) {
				classList.push(key);
			}
		});

		finalClassList = `${prefix}-${classname} ${classList.toString().replace(/,/g, ' ')}`;
	}

	return finalClassList;
};
