// Writes dist/work/<slug>/index.html for each case study with its own <head>
// so crawlers and link previews see the right title and meta tags. Runs before
// prerender.mjs so these pages start from the empty app shell, not the
// prerendered homepage (which would break hydration on /work/<slug>).
// Also writes dist/404.html: Vercel serves it with a real 404 status for any
// URL that has no file, and the client router renders the NotFound page.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://www.jeremyswagger.com'
const rootDir = fileURLToPath(new URL('..', import.meta.url))

const { caseStudyMeta } = await import(`${rootDir}dist-ssr/entry-server.js`)
const template = await readFile(`${rootDir}dist/index.html`, 'utf-8')

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

// Tags that are replaced rather than duplicated.
const REPLACED_TAGS = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta\s+name="description"[\s\S]*?\/>\s*/,
  /<link\s+rel="canonical"[^>]*>\s*/,
  /<meta\s+property="og:(?:type|title|description|url|image)"[\s\S]*?\/>\s*/g,
  /<meta\s+name="twitter:card"[^>]*>\s*/,
]

function buildHead({ slug, title, summary, image }) {
  const url = `${SITE_URL}/work/${slug}`
  const pageTitle = escapeHtml(`${title} | Jeremy Swagger`)
  const description = escapeHtml(summary)
  const tags = [
    `<title>${pageTitle}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:title" content="${pageTitle}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
  ]
  if (image) {
    tags.push(
      `<meta property="og:image" content="${escapeHtml(new URL(image, SITE_URL).href)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
    )
  }
  return tags.map((tag) => `  ${tag}\n`).join('')
}

for (const study of caseStudyMeta) {
  let html = template
  for (const pattern of REPLACED_TAGS) html = html.replace(pattern, '')
  html = html.replace('</head>', `${buildHead(study)}</head>`)

  const outDir = `${rootDir}dist/work/${study.slug}`
  await mkdir(outDir, { recursive: true })
  await writeFile(`${outDir}/index.html`, html)
}

console.log(`Generated route heads for ${caseStudyMeta.length} case studies`)

let notFound = template
for (const pattern of REPLACED_TAGS) notFound = notFound.replace(pattern, '')
notFound = notFound.replace(
  '</head>',
  `  <title>Page not found | Jeremy Swagger</title>\n  <meta name="robots" content="noindex" />\n</head>`,
)
await writeFile(`${rootDir}dist/404.html`, notFound)

console.log('Generated 404.html')
