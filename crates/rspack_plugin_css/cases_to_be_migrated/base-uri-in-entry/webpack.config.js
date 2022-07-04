import Self from '../../../src';

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    index: {
      import: './index.js',
      baseUri: 'my-scheme://uri',
    },
  },
  optimization: {
    minimize: false,
  },
  output: {
    module: true,
    OutputAssetModuleFilename: 'asset/[name][ext]',
    chunkFormat: 'module',
    chunkLoading: 'import',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: Self.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
        generator: {
          publicPath: '/assets/',
        },
      },
    ],
  },
  plugins: [new Self({ experimentalUseImportModule: true })],
};
