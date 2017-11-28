const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.post('/', (req, res) => {
  console.log('REQUEST BODY: ', req.body);
  res.send({ hi: 'there'});
})

// if (process.env.NODE_ENV !== 'production') {
// 	const webpackMiddleware = require('webpack-dev-middleware');
// 	const webpack = require('webpack');
// 	const webpackConfig = require('./webpack.config.js');
// 	app.use(webpackMiddleware(webpack(webpackConfig)));
// } else {
// 	app.use(express.static('dist'));
// 	app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'dist/index.html'));
// 	});
// }


app.listen(process.env.PORT || 3050, () => console.log('Listening'));