const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common');
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `./config/.env.${nodeEnv}`),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: false,
      generateStatsFile: true,
    }),
  ].filter(Boolean),
});
