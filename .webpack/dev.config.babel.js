import path from 'path';
import env from 'dotenv'
import { hot_module_replacement, html_webpack, copy_webpack, loader_options, define } from './plugins';
import { babel_loader, glob_loader, sass, sass_resources, svgr } from './rules'

export default {
	mode: "development",
	devtool: 'inline-source-map',
	stats: 'errors-only',
	entry: [
		'@babel/polyfill',
		path.resolve(__dirname, '../src/index.js'),
		path.resolve(__dirname, '../src/index.scss'),
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: [
			'node_modules',
			path.resolve(__dirname, '../src/shared'),
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '../public/index.html'), // boolean | string | array, static file location
		compress: true, // enable gzip compression
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		proxy: {
			'/assets': {
				target: 'http://localhost:8080',
				pathRewrite: {'^/assets' : 'public/assets'}
			}
		},
		historyApiFallback: true,
		stats: 'errors-only'
	},
	plugins: [hot_module_replacement(), html_webpack(), copy_webpack(), loader_options(), define()],
	module: { rules: [babel_loader, glob_loader, svgr, sass, sass_resources] }
};
