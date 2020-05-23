import path from "path";

export default {
	test: /\.(css|scss)$/,
	loader: 'sass-resources-loader',
	options: {
		resources: [
			path.join(__dirname, '../../src/sass/_colors.scss'),
			path.join(__dirname, '../../src/sass/_fonts.scss')
		]
	}
}
