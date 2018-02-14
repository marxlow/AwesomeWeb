import path from 'path';

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    filename: './build/awesomeweb.bundle.js'
  },
  target: 'web', // Defaulted to 'web'. Set target to 'node' for optimization in node.js env (APIs)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
