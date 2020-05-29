const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src'),
			'@setup': path.resolve(__dirname, './src/setup'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@store': path.resolve(__dirname, './src/shared/store'),
			'@sockets': path.resolve(__dirname, './src/shared/sockets'),
			'@hocs': path.resolve(__dirname, './src/shared/higher-order-components'),
			'@assets': path.resolve(__dirname, './public/assets'),
			'@components': path.resolve(__dirname, './src/shared/components'),
			'@constants': path.resolve(__dirname, './src/shared/constants'),
			'@svgs': path.resolve(__dirname, './public/assets/svgs'),
			'@redux': path.resolve(__dirname, './src/shared/local-redux'),
			'@utils': path.resolve(__dirname, './src/shared/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@config': path.resolve(__dirname, './src/shared/config'),
			'@i18n': path.resolve(__dirname, './src/i18n')
		}
	}
}
