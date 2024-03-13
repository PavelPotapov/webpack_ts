import webpack, { type Configuration } from 'webpack'
import { type IBuildOptions } from './types/types'
import HtmlWebpackPlugin from 'html-webpack-plugin' // плагин, который создает html и вставляет в него собранный js.
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import ESLintPlugin from 'eslint-webpack-plugin'

export function buildPlugins({ mode, paths }: IBuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ESLintPlugin()
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )
  }

  return plugins
}
