const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static(__dirname + '/dist'));

app.use('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.listen(3000, '0.0.0.0', () => { console.log('App started http://localhost:3000/'); });
