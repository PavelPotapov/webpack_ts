import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' //плагин, который создает html и вставляет в него собранный js.

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type Mode = 'production' | 'development'

interface envVariables {
  mode: Mode
  port: number
}

export default (env: envVariables) => {
  const isDev = env.mode === 'development'
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true, // Clean the output directory before emit.
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      isDev && new webpack.ProgressPlugin(), //замедляет сборку
    ].filter(Boolean),
    module: {
      //в массиве rules указываются loaders в нужном порядке
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    //resolver, порядок важен
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
    devtool: isDev ? 'inline-source-map' : false,
  }
  return config
}
