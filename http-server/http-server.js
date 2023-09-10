const http = require('http');

const host = 'localhost';
const port = 8000;

console.log(host, port);

const helloMego = `
  <html>
    <head>
    </head>
    <body>
      <h1>Hello Mego 1</h1>
    </body>
  </html>

`;

const goodMorning = `
  <html>
    <head>
      <link rel="stylesheet" href="mystyle.css">
    </head>
    <body>
      <h1>Good Morning Israel</h1>
    </body>
  </html>

`;
const requestListener = function (req, res) {
  console.log(req.url);
  res.writeHead(200);
  if (req.url == '/yosi') {
    res.end(goodMorning);
  } else if (req.url == '/mystyle.css') {
    const css = `
      body {
        background: blue;
        color: white;
      }
    `;
    res.end(css);
  } else {
    res.end(helloMego);
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
