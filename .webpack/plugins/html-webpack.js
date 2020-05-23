import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => new HtmlWebpackPlugin({
	template: 'public/index.html',
	inject: true
})
