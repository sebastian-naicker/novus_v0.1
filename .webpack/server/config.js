import path from "path";

export default {
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
}
