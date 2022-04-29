const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/App.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/js/webpack/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.mjs', '.wasm'],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
};
