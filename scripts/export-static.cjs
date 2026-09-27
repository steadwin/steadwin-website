const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Render the same page components as the hosted website. No duplicate page content.
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    const source = fs.readFileSync(filename, 'utf8');
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
      fileName: filename,
    });
    module._compile(outputText, filename);
  };
}
const root = path.resolve(__dirname, '..');
const destination = process.argv[2];
if (!destination) throw new Error('Provide an output directory: node scripts/export-static.cjs /absolute/output/path');
const output = path.resolve(destination);
if (output === root || root.startsWith(output + path.sep)) throw new Error('Choose a separate export directory.');
fs.mkdirSync(output, { recursive: true });
const pages = require('../app/components/pages.tsx');
const { pageDetails, services } = require('../app/lib/site-data.ts');
const components = { home: pages.HomePage, about: pages.AboutPage, services: pages.ServicesPage, residential: pages.ResidentialPage, commercial: pages.CommercialPage, gallery: pages.GalleryPage, contact: pages.ContactPage };
const entries = [
  ...pageDetails.map(details => ({ ...details, component: components[details.key], props: {} })),
  ...services.map(service => ({ path: '/services/' + service.slug + '/', title: service.title + ' | STEADWIN GROUP', description: service.intro, component: pages.ServicePage, props: { slug: service.slug } })),
];
const paths = new Set(entries.map(entry => entry.path));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function render(entry, target) {
  const levels = entry.path.split('/').filter(Boolean).length;
  const relativeRoot = '../'.repeat(levels);
  let body = renderToStaticMarkup(React.createElement(entry.component, entry.props));
  const preloads = [];
  body = body.replace(/<link\b[^>]*rel="preload"[^>]*\/?\s*>/g, tag => { preloads.push(tag); return ''; });
  let document = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#07151d">' +
    '<title>' + escape(entry.title) + '</title><meta name="description" content="' + escape(entry.description) + '">' +
    '<meta property="og:title" content="' + escape(entry.title) + '"><meta property="og:description" content="' + escape(entry.description) + '"><meta property="og:type" content="website">' +
    '<link rel="icon" type="image/jpeg" href="/assets/steadwin-logo.jpg">' + preloads.join('') + '<link rel="stylesheet" href="/styles.css"><script src="/app.js" defer></script></head><body>' + body + '</body></html>\n';
  document = document.replace(/\b(href|src)="(\/[^\"]*)"/g, (match, attribute, url) => {
    // A host may serve 404.html at any missing nested URL, so its links stay root-relative.
    if (path.basename(target) === '404.html') return match;
    const [, pathname, suffix] = url.match(/^([^?#]*)(.*)$/);
    if (paths.has(pathname)) return attribute + '="' + relativeRoot + (pathname === '/' ? '' : pathname.slice(1)) + 'index.html' + suffix + '"';
    return attribute + '="' + relativeRoot + pathname.slice(1) + suffix + '"';
  });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, document);
}
for (const entry of entries) render(entry, path.join(output, entry.path.slice(1), 'index.html'));
const NotFound = require('../app/not-found.tsx').default;
render({ path: '/', title: 'Page not found | STEADWIN GROUP', description: 'Return to STEADWIN GROUP to explore our interior services.', component: NotFound, props: {} }, path.join(output, '404.html'));
fs.copyFileSync(path.join(root, 'app/globals.css'), path.join(output, 'styles.css'));
fs.copyFileSync(path.join(root, 'public/app.js'), path.join(output, 'app.js'));
fs.cpSync(path.join(root, 'public/assets'), path.join(output, 'assets'), { recursive: true });
console.log(JSON.stringify({ directory: output, pages: entries.length, routes: entries.map(entry => entry.path) }));
