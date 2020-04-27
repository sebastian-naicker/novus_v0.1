import path from 'path';

export default [
	{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: ['babel-loader'],
	},
	{
		test: /\.scss$/,
		enforce: 'pre',
		loader: ['import-glob-loader2']
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
		test: /\.scss$/,
		loader: [
			{ loader: 'style-loader' },
			{ loader: 'css-loader' },
			{ loader: 'postcss-loader' },
			{ loader: 'sass-loader' }
		]
	},
	{
		test: /\.(css|scss)$/,
		loader: 'sass-resources-loader',
		options: {
			resources: [
				path.join(__dirname, '../src/sass/_colors.scss'),
				path.join(__dirname, '../src/sass/_fonts.scss')
			]
		}
	},
]
