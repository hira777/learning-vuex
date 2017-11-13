const path = require('path');

module.exports = {
  entry: {
    'app': './src/js/app',
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
          js: 'babel-loader?presets[]=env'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      }],
    }],
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    },
  },
};
