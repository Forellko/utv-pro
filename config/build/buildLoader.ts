import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildLoaders(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
  ];
}
