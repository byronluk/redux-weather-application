const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index',
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_WEATHER_API_KEY: JSON.stringify(process.env.REACT_APP_WEATHER_API_KEY),
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
