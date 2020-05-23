import path from 'path';
import serverConfig from './server/config'
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
	devServer: serverConfig,
	plugins: [hot_module_replacement(), html_webpack(), copy_webpack(), loader_options(), define()],
	module: { rules: [babel_loader, glob_loader, svgr, sass, sass_resources] }
};
