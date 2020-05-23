import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
	test: /\.(sa|sc|c)ss$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader
		},
		'css-loader',
		'postcss-loader',
		'sass-loader'
	]
}
