import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distIndexPath = `${rootDir}dist/index.html`
const ssrEntryPath = `${rootDir}dist-ssr/entry-server.js`

const { render } = await import(ssrEntryPath)
const appHtml = render()

const template = await readFile(distIndexPath, 'utf-8')
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

await writeFile(distIndexPath, html)
await rm(`${rootDir}dist-ssr`, { recursive: true, force: true })

console.log('Prerendered content injected into dist/index.html')
