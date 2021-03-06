import serveReact from '../serveReact'
import createServeReactAppConfig from '../createServeReactAppConfig'

/**
 * Serve a React app.
 */
export default function(args, cb) {
  console.log('nwb: serve-react-app')
  serveReact(args, createServeReactAppConfig(args), cb)
}
