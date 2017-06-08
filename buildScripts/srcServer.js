import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev'

/* eslint-disable no-console */

const _port = 3000;
const _app = express();
const _compiler = webpack(webpackConfig);

_app.use(require('webpack-dev-middleware')(_compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

_app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

_app.listen(_port, (err) => {
	if (err) {
		console.log(err);
	}else {
		open('http://localhost:' + _port);
	}
});
