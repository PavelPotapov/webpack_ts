import { type ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type IBuildOptions } from './types/types'

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]' //формирование названия файла
      }
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,

    use: [
      // Creates `style` nodes from JS strings
      // 'style-loader',
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  const tsLoader = {
    // ts-loader по умолчанию умеет работать с JSX, поэтому можно не устанавливать Babel-loader для работы с react
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  return [scssLoader, tsLoader]
}
