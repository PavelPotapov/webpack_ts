import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, IBuildPaths } from './config/build/types/types'

type Mode = 'production' | 'development'

interface envVariables {
  mode: BuildMode
  port: number
}

export default (env: envVariables) => {
  const paths: IBuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'app.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  })
  return config
}
