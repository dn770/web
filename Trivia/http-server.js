const http = require('http');

const host = 'localhost';
const port = 8000;

console.log(host, port);

if (req.url == '/index') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(fs.readFileSync('index.html', 'utf8'));
} else if (req.url == '/style') {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.end(fs.readFileSync('style.css', 'utf8'));
} //else if (req.url == '/script') {
  //res.writeHead(200, { 'Content-Type': 'application/javascript' });
  //res.end(fs.readFileSync('script.js', 'utf8'));}
   else {
  res.writeHead(404);
  res.end('File not found');
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
