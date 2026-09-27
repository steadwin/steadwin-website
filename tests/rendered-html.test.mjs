import assert from 'node:assert/strict';
import test from 'node:test';

const workerUrl = new URL('../dist/server/index.js', import.meta.url);
workerUrl.searchParams.set('test', `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const address = 'Second Floor, 26, Puttenahalli Rd, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078';
const serviceSlugs = ['complete-interiors', 'electrical-plumbing', 'painting-pop', 'granite-tiles', 'networking-cctv', 'glass-aluminium', 'aluminium-glass-railings', 'skylights-office-partitions'];
const routes = ['/', '/about/', '/services/', '/residential/', '/commercial/', '/projects/', '/gallery/', '/contact/', ...serviceSlugs.map(slug => '/services/' + slug + '/')];
const rendered = new Map();
async function request(path) {
  return worker.fetch(new Request('http://localhost' + path, { headers: { accept: 'text/html' } }), { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}
test('all 16 pages render independently with shared navigation, office contacts and quick contact', async () => {
  const titles = new Set();
  for (const route of routes) {
    const response = await request(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get('content-type') ?? '', /^text\/html\b/i);
    const html = await response.text();
    rendered.set(route, html);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route + ' has one page heading');
    assert.match(html, /href="tel:\+918792695400"/);
    assert.match(html, /href="mailto:info@steadwin.in"/);
    assert.ok(html.includes(address), route + ' office address');
    assert.match(html, /id="rail-links"/);
    assert.match(html, /aria-controls="rail-links"/);
    assert.match(html, /https:\/\/wa.me\/918792695400/);
    assert.match(html, /assets\/steadwin-logo.jpg/);
    assert.doesNotMatch(html, /href="#(?:about|services|gallery|contact)"/);
    assert.doesNotMatch(html, /name="codex-preview"/);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, route + ' title');
    assert.ok(!titles.has(title), route + ' unique title');
    titles.add(title);
  }
  const contact = rendered.get('/contact/');
  assert.match(contact, /action="https:\/\/wa.me\/918792695400"/);
  assert.match(contact, /id="project-type"/);
  assert.match(contact, /id="enquiry"/);
  assert.match(contact, /Book Free Site Visit/);
  assert.match(contact, /steadwin-group-company-profile\.pdf/);
  assert.match(rendered.get('/projects/'), /purpose=Project\+quotation/);
  assert.match(rendered.get('/projects/'), /Book Free Site Visit/);
  assert.match(rendered.get('/projects/'), /COMPLETED WORK/);
  assert.match(rendered.get('/projects/'), /assets\/projects\/bedroom-main\.webp/);
  assert.match(rendered.get('/projects/'), /assets\/projects\/dressing-vanity\.webp/);
  assert.doesNotMatch(rendered.get('/projects/'), /Real project stories come with permission/);
  assert.match(rendered.get('/'), /Download Company Profile/);
  assert.match(rendered.get('/gallery/'), /id="gallery-dialog"/);
  assert.match(rendered.get('/gallery/'), /not photographs of completed STEADWIN projects/);
  assert.match(rendered.get('/residential/'), /project=Residential/);
  assert.match(rendered.get('/commercial/'), /project=Commercial/);
  for (const slug of serviceSlugs) {
    assert.match(rendered.get('/services/' + slug + '/'), /href="\/contact\/\?service=/);
  }
});
test('unknown service routes return 404 instead of an empty page', async () => {
  const response = await request('/services/unknown-service/');
  assert.equal(response.status, 404);
});
