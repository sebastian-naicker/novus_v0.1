import path from 'path';
import { DefinePlugin, LoaderOptionsPlugin, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import env from 'dotenv'
import { babel_loader, glob_loader, sass, sass_resources, svgr } from './rules'

const dotenv = env.config({ path: '.env' });

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
	plugins: [
		new HotModuleReplacementPlugin(),

		// handle html files
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			inject: true
		}),

		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				API_URL: JSON.stringify(dotenv.parsed ? dotenv.parsed.API_URL : process.env.API_URL ),
			}
		}),

		new CopyWebpackPlugin([ { from: 'public/assets', to: 'assets' } ] ),

		// enable debug mode
		new LoaderOptionsPlugin({
			debug: true
		})
	],
	module: {
		rules: [babel_loader, glob_loader, svgr, sass, sass_resources],
	}
};
