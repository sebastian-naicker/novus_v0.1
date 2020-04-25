const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src'),
			'@setup': path.resolve(__dirname, './src/app/setup'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@store': path.resolve(__dirname, './src/shared/store'),
			'@app-enhancements': path.resolve(__dirname, './src/shared/utils/enhanced-components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/shared/common/components'),
			'@svgs': path.resolve(__dirname, './src/assets/svgs'),
			'@redux': path.resolve(__dirname, './src/shared/local-redux'),
			'@utils': path.resolve(__dirname, './src/shared/utils'),
			'@pages': path.resolve(__dirname, './src/app/pages'),
			'@config': path.resolve(__dirname, './src/shared/config'),
			'@i18n': path.resolve(__dirname, './src/i18n')
		}
	}
}
