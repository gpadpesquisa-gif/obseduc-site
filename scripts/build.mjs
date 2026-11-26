import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

const files = [
  'index.html',
  'avaluscs.html',
  'styles.css',
  'script.js',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'favicon.svg',
  'og.svg',
  'manus-routes.json',
  'vercel.json'
];

await Promise.all(files.map((file) => cp(file, `dist/${file}`)));
console.log(`Static build created in dist/ (${files.length} files)`);
