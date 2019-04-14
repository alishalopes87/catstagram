var path = require('path');

// to see the solutions in the browser, switch out the file path at the 'entry' property.
// For exercise 2 solution, use './solutions/exercise-2/index.js'
// For exercise 3 solution, use './solutions/exercise-3/index.js'
// For exercise 4 solution, use './solutions/exercise-4/index.js'
// For exercise 5 solution, use './solutions/exercise-5/index.js'
// For exercise 5 bonus solution, use './solutions/exercise-5-bonus/index.js'
// For main project, use './src/index.js'

module.exports = {
  // entry: webpack's entry file, where webpack will start looking to build it's dependency graph
  entry: './src/index.js',
  // output: where webpack will put the 'bundle' of code it made from packaging dependencies
  output: {
    // the filename of the output file
    filename: 'bundle.js',
    // the path to the directory where the output file should go
    path: path.resolve(__dirname, 'dist')
  },
  // these are configurations for the dev server
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // webpack only understands javascript! loaders transform files into modules for webpack
  module: {
    // this is an array of loaders
    loaders: [
      // test determines which file extensions to run the loader on
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
};
