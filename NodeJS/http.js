/*

2. Instantiate an HTTP server with a request handler function, and have it listen on a port.
3. Get headers, URL, method and body data from request objects.
4. Send headers, HTTP status codes and body data via response objects.
5. Pipe data from request objects and to response objects.
6. Handle errors in both the request and response streams.

*/

const http = require('http');

//2.
http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

//3.
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const responseBody = { headers, method, url, body };

//4.
    response.write(JSON.stringify(responseBody));

//5.
    response.on('error', (err) => {
      console.error(err);
    });

    response.end();

  });
}).listen(8080);