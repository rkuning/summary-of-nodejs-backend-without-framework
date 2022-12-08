/*
Body Request
Ketika client melakukan permintaan dengan method POST atau PUT, biasanya permintaan tersebut memiliki sebuah data yang disimpan pada body request. Data pada body bisa berupa format teks, JSON, berkas gambar, atau format lainnya. Data tersebut nantinya digunakan oleh server untuk diproses di database atau disimpan dalam bentuk objek utuh.

Ketahuilah bahwa http.clientRequest merupakan turunan dari readable stream, yang di mana untuk mendapatkan data body akan sedikit sulit dibandingkan dengan mendapatkan data header. Data di body didapatkan dengan teknik stream, seperti yang sudah kita ketahui, teknik ini memanfaatkan EventEmitter untuk mengirimkan bagian-bagian datanya. Dalam kasus http.clientRequest event data dan end-lah yang digunakan untuk mendapatkan data body.

Berikut adalah contoh bagaimana mendapatkan data body:

const requestListener = (request, response) => {
    let body = [];
 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
 
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
};
Mari kita bedah kodenya.

Pertama, kita deklarasikan variabel body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream. 
Lalu, ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
Terakhir, ketika proses stream berakhir, maka event end akan terbangkitkan. Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString().

Huft! Cukup melelahkan yah untuk mendapatkan data melalui teknik stream. Guna memantapkan pemahaman, mari kita praktikan pada proyek web server sebelumnya.


*/

const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;

  const { method } = req;

  if (method === "GET") {
    res.end("<h1>Hello!</h1>");
  }

  if (method === "POST") {
    let body = [];

    req.on("data", (chuck) => {
      body.push(chuck);
    });

    req.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      res.end(`<h1>Hai, ${name}!</h1>`);
    });
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server already running on http://${host}:${port}`);
});

// cara testing codenya sebagai berikut :
// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"
