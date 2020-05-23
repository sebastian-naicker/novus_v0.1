import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default () => new MiniCssExtractPlugin({
	filename: 'static/css/[name].[hash].css',
	chunkFilename: 'static/css/chunk.[id].css'
})
