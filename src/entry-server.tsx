import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { caseStudies } from './data/caseStudies'

export function render() {
  return renderToString(
    <StaticRouter location="/">
      <App />
    </StaticRouter>,
  )
}

// Head metadata for scripts/generate-route-heads.mjs; image URLs are the built asset paths.
export const caseStudyMeta = caseStudies.map(({ slug, title, summary, heroImage, image }) => ({
  slug,
  title,
  summary,
  image: heroImage ?? image,
}))
