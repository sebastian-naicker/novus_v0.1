import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		// handle html files
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.css$/, loaders: ['style', 'css'] },
		]
	}

}
