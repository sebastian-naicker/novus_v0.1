import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from "webpack-md5-hash";

export default {
	mode: "production",
	devtool: 'source-map',
	entry: {
		main: path.resolve(__dirname, '../src/index'),
		vendor: path.resolve(__dirname, '../src/vendor')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules',
			path.resolve(__dirname, '../src/app'),
			path.resolve(__dirname, '../src/shared'),
		]
	},
	plugins: [
		// hash all bundled files
		new WebpackMd5Hash(),

		// handle html files
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
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
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader'] },
			{ test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader'] },
		]
	}
};
