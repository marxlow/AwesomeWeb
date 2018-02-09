var webpack = require('webpack');
var path = require('path');
var outputFile = 'awesomeweb.js';
var fs = require('fs');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var libraryName = 'awesomeweb';

var outputFile;
var plugins = [ ];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var nodeModules = fs.readdirSync("node_modules")
  .reduce(function(acc, mod) {
    if (mod === ".bin") {
      return acc
    }

    acc[mod] = "commonjs " + mod
    return acc
  }, {})

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'sourcemap',
  target: 'node',
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    library: 'api',
    libraryTarget: 'umd'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build)/
      }
    ]
  },
  resolve: {
    extensions: [".js" ]
  },
};

module.exports = config;
