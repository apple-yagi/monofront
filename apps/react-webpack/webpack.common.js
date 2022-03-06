const path = require('path');

module.exports = {
  entry: {
    'react-webpack': path.join(__dirname, 'src/pages/', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
};
