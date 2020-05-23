export default {
	test: /\.(png|jpg|gif)$/i,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 8192
			}
		}
	]
}
