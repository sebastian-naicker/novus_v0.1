import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev'

/* eslint-disable no-console */

const _port = 3001;
const _app = express();
const _compiler = webpack(webpackConfig);

_app.use(require('webpack-dev-middleware')(_compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

_app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

_app.get('/users', (req, res) => {

	// TODO: Implement using mongo
	res.json([
		{"id": 1, "firstName": "Bob", "lastName": "Gimbly", "email": "mail@mail.com"},
		{"id": 2, "firstName": "John", "lastName": "Flame", "email": "mail@mail.com"},
		{"id": 3, "firstName": "Legolas", "lastName": "Elf", "email": "mail@mail.com"}
	]);

});

_app.listen(_port, (err) => {
	if (err) {
		console.log(err);
	}else {
		open('http://localhost:' + _port);
	}
});
