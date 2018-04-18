import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	mode: "development",
	devtool: 'inline-source-map',
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=false', // note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, '../src/index'),
		path.resolve(__dirname, '../src/index.scss'),
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: [
			'node_modules',
			path.resolve(__dirname, '../src/app'),
			path.resolve(__dirname, '../src/shared'),
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist'), // boolean | string | array, static file location
		compress: true, // enable gzip compression
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
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
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.scss$/,
				enforce: 'pre',
				loader: ['import-glob-loader2']
			},
			{
				test: /\.scss$/,
				loader: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' }
				]
			},
		]
	}
};
