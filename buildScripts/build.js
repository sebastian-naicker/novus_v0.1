/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// set dev environment variable to production
process.env.NODE_ENV = 'production';

console.log(chalk.cyan('Building Production Files...'));

webpack(webpackConfig).run((err, stats) => {

	if(err) {
		console.log(chalk.red(err))
		return 1;
	}

	// webpack stats
	const jsonStats = stats.toJson();

	if( jsonStats.hasErrors ) {
		return jsonStats.errors.map( error => console.log(chalk.red(error)) );
	}

	if( jsonStats.hasWarnings ) {
		console.log(chalk.yellow('Webpack Warnings: '));
		jsonStats.warnings.map( warning => console.log(chalk.yellow(warning)) );
	}

	console.log(`Webpack stats: ${stats}`);
	console.log(chalk.green('Build Success... Files built to: /dist'));

	return 0;

});
