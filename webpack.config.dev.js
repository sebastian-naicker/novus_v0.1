import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MyWebpackPlugin from './common/webpack/plugins/MyWebpackPlugin';

export default {
	devtool: 'inline-source-map',
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src/app'),
			path.resolve(__dirname, 'src/shared'),
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		// handle html files
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		}),

		// test plugin
		new MyWebpackPlugin({
			name: 'test plugin',
		}),

		// enable debug mode
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	module: {
		rules: [
			{ test: /\.(js|jsx|test)$/, exclude: /node_modules/, loader: ['babel-loader'] },
			{ test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
		]
	}
};
