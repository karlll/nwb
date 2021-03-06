import path from 'path'

import {getDefaultHTMLConfig} from '../appConfig'
import webpackServer from '../webpackServer'

export default function(args, cb) {
  let entry = args._[1] || 'src/index.js'
  let dist = args._[2] || 'dist'

  console.log('nwb: serve-web-app')
  webpackServer(args, {
    entry: path.resolve(entry),
    output: {
      path: path.resolve(dist),
      filename: 'app.js',
      publicPath: '/'
    },
    plugins: {
      html: getDefaultHTMLConfig()
    },
    server: {
      staticPath: path.resolve('public')
    }
  }, cb)
}
