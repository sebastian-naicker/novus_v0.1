import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		main: path.resolve(__dirname, 'src/index'),
		vendor: path.resolve(__dirname, 'src/vendor')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// extract all css for production
		new ExtractTextPlugin('[name].[contenthash].css'),

		// hash all bundled files
		new WebpackMd5Hash(),

		// remove duplicate packages
		new webpack.optimize.DedupePlugin(),

		// commonsChunkPlugin used for bundle splitting
		// basically anything that's not apart of main code base
		// will be split into a seperate bundle
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		// JS Minification
		new webpack.optimize.UglifyJsPlugin(),

		// handle html files
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		})
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
		]
	}
};
