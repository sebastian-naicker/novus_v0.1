import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import env from 'dotenv'

const dotenv = env.config({ path: '.env' })

export default {
	mode: 'production',
	entry: [
		'@babel/polyfill',
		path.resolve(__dirname, '../src/index.js'),
		path.resolve(__dirname, '../src/index.scss')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.test'],
		modules: ['node_modules', path.resolve(__dirname, '../src/app'), path.resolve(__dirname, '../src/shared')]
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
		}),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('prod'),
				API_URL: JSON.stringify(dotenv.parsed.API_URL)
			}
		}),

		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		}),

		new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }])
	],
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader'] },
			{ test: /\.scss$/, enforce: 'pre', loader: ['import-glob-loader2'] },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							native: false,
							svgo: false
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				loader: 'sass-resources-loader',
				options: {
					resources: [
						path.join(__dirname, '../src/sass/base/_colors.scss'),
						path.join(__dirname, '../src/sass/base/_fonts.scss')
					]
				}
			}
		]
	}
}
