const MyWebpackPlugin = (args) => {
	console.log('invoked with', args);
};

MyWebpackPlugin.prototype.apply = compiler => {
	compiler.plugin('webpackEventHook', (compilation, callback) => {
		console.log('my plugin was run');
		callback();
	});
};

export default MyWebpackPlugin;
