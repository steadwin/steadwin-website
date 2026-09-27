import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'READY-TO-UPLOAD');
const rootPrefix = root + path.sep;
const host = '127.0.0.1';
const requestedPort = Number(process.env.PORT || 5173);
if (!Number.isInteger(requestedPort) || requestedPort < 1 || requestedPort > 65535) {
  console.error('PORT must be a number from 1 to 65535.');
  process.exit(1);
}
if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error('The READY-TO-UPLOAD folder is missing. Extract the complete ZIP before running npm run dev.');
  process.exit(1);
}
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.woff2':'font/woff2', '.pdf':'application/pdf' };
const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400); response.end('Invalid URL'); return; }
  if (pathname.includes('\0') || pathname.includes('\\') || pathname.split('/').some(part => part.startsWith('.') && part !== '')) {
    response.writeHead(403); response.end('Forbidden'); return;
  }
  let file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(rootPrefix)) { response.writeHead(403); response.end('Forbidden'); return; }
  let stat;
  let status = 200;
  try {
    stat = fs.statSync(file);
    if (stat.isDirectory()) {
      if (!pathname.endsWith('/')) {
        const search = new URL(request.url, 'http://localhost').search;
        response.writeHead(308, { Location: encodeURI(pathname + '/') + search });
        response.end(); return;
      }
      file = path.join(file, 'index.html');
      stat = fs.statSync(file);
    }
    if (!stat.isFile()) throw new Error('Not a file');
  } catch {
    file = path.join(root, '404.html');
    try { stat = fs.statSync(file); status = 404; }
    catch { response.writeHead(404); response.end('File not found'); return; }
  }
  response.writeHead(status, {
    'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Content-Length': stat.size,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  if (request.method === 'HEAD') { response.end(); return; }
  const stream = fs.createReadStream(file);
  stream.on('error', () => response.destroy());
  stream.pipe(response);
});
let port = requestedPort;
server.on('error', error => {
  if (error.code === 'EADDRINUSE' && port < Math.min(requestedPort + 10, 65535)) {
    port += 1;
    server.listen(port, host);
    return;
  }
  console.error('Could not start the website:', error.message);
  process.exitCode = 1;
});
server.on('listening', () => {
  console.log('\nSTEADWIN GROUP website is running.');
  console.log('Open http://' + host + ':' + port + '/ in your browser.');
  console.log('Edit files in READY-TO-UPLOAD, then refresh the browser.');
  console.log('Press Ctrl+C to stop.\n');
});
server.listen(port, host);
process.on('SIGINT', () => server.close(() => process.exit(0)));
