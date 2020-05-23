import path from 'path'
import { babel_loader, glob_loader, sass, sass_resources, svgr, extract_css, url_loader } from './rules'
import { md5_hash, html_webpack, copy_webpack, extract_css_plugin, define } from './plugins';

export default {
	mode: 'production',
	entry: [
		'@babel/polyfill',
		path.resolve(__dirname, '../src/index.js'),
		path.resolve(__dirname, '../src/index.scss')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
		filename: 'static/js/bundle.[hash].js',
		chunkFilename: 'static/js/chunk.[id].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: ['node_modules', path.resolve(__dirname, '../src/shared')]
	},
	plugins: [md5_hash(), html_webpack(true), extract_css_plugin(), define('production'), copy_webpack()],
	module: { rules: [babel_loader, glob_loader, svgr, sass, sass_resources, extract_css, url_loader] }
}
