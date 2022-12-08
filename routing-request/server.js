const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  switch (url) {
    case "/":
      if (method === "GET") {
        response.end("<h1>Ini adalah homepage</h1>");
      } else {
        response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
      }
      break;
    case "/about":
      if (method === "GET") {
        response.end("<h1>Halo! Ini adalah halaman about</h1>");
      } else if (method === "POST") {
        let body = [];

        request.on("data", (chunk) => {
          body.push(chunk);
        });

        request.on("end", () => {
          body = Buffer.concat(body).toString();
          const { name } = JSON.parse(body);
          response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
        });
      } else {
        response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
      }
      break;
    default:
      response.end("<h1>Halaman tidak ditemukan!</h1>");
      break;
  }
};

const port = 5000;
const host = "localhost";
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server already running on port ${port}`);
});

// cara menjalankan

/*
curl -X GET http://localhost:5000/about
output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>

*/
