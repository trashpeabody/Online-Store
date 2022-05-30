const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const jsRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}

const imageRules = {
  test: /\.(png|jpg|jpeg|gif|svg)$/i,
  type: 'asset/resource'
}

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.jsx',
    output: {
      filename: isProduction
        ? '[name].[contenthash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build/')
    },
    module: {
      rules: [jsRules, sassRules, imageRules]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new Dotenv({ systemvars: true })
    ],
    devServer: {
      open: true,
      historyApiFallback: true
    }
  }
}
