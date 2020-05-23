export default {
	test: /\.scss$/,
	loader: [
		{ loader: 'style-loader' },
		{ loader: 'css-loader' },
		{ loader: 'postcss-loader' },
		{ loader: 'sass-loader' }
	]
}
