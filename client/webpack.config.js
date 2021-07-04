const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * コマンド引数からの、ビルドタイプ指定時の定数
 */
const ENV = {
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
};

const isNumber = (numberString) => Number.isNaN(Number(numberString));

/**
 * buildのタイプを指定
 */
const getBuildTypes = (mode) => {
  switch (mode) {
    case ENV.DEVELOPMENT:
      return 'development';
    case ENV.PRODUCTION:
      return 'production';
    default:
      throw new Error(`not found mode ${mode}`);
  }
};

/**
 * proxyの定義
 */
const getProxy = (mode) => {
  switch (mode) {
    case ENV.DEVELOPMENT:
      return {};
    case ENV.PRODUCTION:
      return {};
    default:
      throw new Error(`not found mode ${mode}`);
  }
};

/**
 * @param buildMode 依存環境先ターゲット指定
 * @param port devServer時のポート
 */
const main = ({ buildMode = 'DEVELOPMENT', port = '3030' }) => {
  // messages
  console.log('========================');
  console.log(buildMode);
  console.log('========================');

  // validation
  if (isNumber(port)) throw new Error(`port is not a number: ${port}`);
  const mode = getBuildTypes(buildMode);

  return {
    mode: mode,
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
      filename: '[name].bundle.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: [
        '.js', //
        '.jsx',
        '.ts',
        '.tsx',
        '.json', //
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'), //
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port,
      proxy: getProxy(buildMode),
      compress: true,
      hot: true,
      historyApiFallback: true,
      https: false,
      overlay: true,
    },
  };
};

module.exports = main({
  buildMode: process.env.MODE,
  port: process.env.PORT,
});
