const path = require('path');

module.exports = {
  entry: './src/parser.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'parser.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'overlysimplexmlparser'
  },
};