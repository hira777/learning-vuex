const path = require('path');

module.exports = {
  entry: {
    '/getting-started/app': './src/js/getting-started/app',
    '/shopping-cart/app': './src/js/shopping-cart/app',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs/js'),
  },

  module: {
    rules: [{
      test: /\.vue/,
      exclude: /node_modules/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    },
  },
};
