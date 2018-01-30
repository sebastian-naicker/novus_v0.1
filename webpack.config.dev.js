import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	devtool: 'inline-source-map',
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src/app'),
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		// handle html files
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		}),

		// enable debug mode
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader'] },
			{ test: /\.css$/, loader: ['style-loader', 'css-loader'] },
		]
	}
};
