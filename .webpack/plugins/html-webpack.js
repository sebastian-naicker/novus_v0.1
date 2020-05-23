import HtmlWebpackPlugin from 'html-webpack-plugin';

const prod = {
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
}

export default (isProd) => new HtmlWebpackPlugin({
	template: 'public/index.html',
	inject: true,
	...isProd && { ...prod }
})
