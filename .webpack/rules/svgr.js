export default {
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
}
