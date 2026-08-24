// Injeta o HTML pré-renderizado dentro de <div id="root"> em dist/index.html.
// Roda depois de `vite build` e `vite build --ssr` (ver script "build" no package.json).
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distIndex = resolve(root, 'dist/index.html');
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const template = await readFile(distIndex, 'utf8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`prerender: marcador ${marker} não encontrado em dist/index.html`);
}

const html = template.replace(marker, `<div id="root">${appHtml}</div>`);
await writeFile(distIndex, html, 'utf8');

// A build SSR é um artefato intermediário — não vai para produção.
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true });

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(
  `prerender: ${kb(Buffer.byteLength(appHtml))} de HTML estático injetados ` +
    `(dist/index.html agora tem ${kb(Buffer.byteLength(html))}).`
);
