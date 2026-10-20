import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distIndexPath = `${rootDir}dist/index.html`
const ssrEntryPath = `${rootDir}dist-ssr/entry-server.js`

const { render, caseStudyMeta } = await import(ssrEntryPath)

// Each case study page already has its own <head> from generate-route-heads.mjs;
// inject the rendered body so crawlers that don't run JS see the full content.
const pages = [
  { path: distIndexPath, location: '/' },
  ...caseStudyMeta.map(({ slug }) => ({
    path: `${rootDir}dist/work/${slug}/index.html`,
    location: `/work/${slug}`,
  })),
]

for (const { path, location } of pages) {
  const template = await readFile(path, 'utf-8')
  const html = template.replace('<div id="root"></div>', () => `<div id="root">${render(location)}</div>`)
  await writeFile(path, html)
}
await rm(`${rootDir}dist-ssr`, { recursive: true, force: true })

console.log(`Prerendered ${pages.length} pages (home + case studies)`)
