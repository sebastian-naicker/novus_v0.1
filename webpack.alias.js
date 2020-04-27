const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src'),
			'@setup': path.resolve(__dirname, './src/setup'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@store': path.resolve(__dirname, './src/shared/store'),
			'@hocs': path.resolve(__dirname, './src/shared/higher-order-components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/shared/components'),
			'@svgs': path.resolve(__dirname, './src/assets/svgs'),
			'@redux': path.resolve(__dirname, './src/shared/local-redux'),
			'@utils': path.resolve(__dirname, './src/shared/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@config': path.resolve(__dirname, './src/shared/config'),
			'@i18n': path.resolve(__dirname, './src/i18n')
		}
	}
}
