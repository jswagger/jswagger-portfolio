import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

export function render() {
  return renderToString(
    <StaticRouter location="/">
      <App />
    </StaticRouter>,
  )
}
