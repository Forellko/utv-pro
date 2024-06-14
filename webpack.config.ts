import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoader';

const config: webpack.Configuration = {
  mode: 'production',
  entry: { index: path.resolve(__dirname, 'src', 'index.ts') },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: buildPlugins(),
  module: {
    rules: buildLoaders(),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
