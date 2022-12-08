/*
Response Header
Pada web server yang sudah kita buat, ia memberikan respons dengan format dokumen HTML. Dokumen ini digunakan oleh browser dalam menampilkan website. Anda bisa melihat ini ketika mengakses web server melalui browser. 

Pada url http://localhost:5000 server akan mengembalikan pesan “Ini adalah homepage” atau pada url http://localhost:5000/about server akan mengembalikan pesan “Halo! Ini adalah halaman about”. Pesan yang ditampilkan tampak besar dan tebal karena ia dibungkus oleh elemen heading HTML.

20210308081423664f75293718789efc50db0cf46dbe4d.gif

Sebenarnya, server bisa merespons dengan memberikan data dalam tipe (MIME types) lain, seperti XML, JSON, gambar, atau sekadar teks biasa. Apa pun MIME types yang digunakan, web server wajib memberi tahu pada client. 

Caranya, lampirkan property ‘Content-Type’ dengan nilai MIME types yang disisipkan pada header response. Untuk menyisipkan nilai pada header response, gunakanlah method setHeader().

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
};
Silakan eksplorasi apa saja MIME types yang bisa diberikan pada header Content-Type di halaman Common Types dari MDN ini.

Anda bisa menetapkan data pada header sebanyak yang diinginkan. Method setHeader() menerima dua parameter, yakni nama properti dan nilai untuk headernya.

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
};
Jika Anda menetapkan header dengan properti yang tidak standar (lihat apa saja standard properti pada header) atau Anda buat nama propertinya secara mandiri, maka sangat disarankan untuk menambahkan huruf X di awal nama propertinya. 

Ketahuilah juga bahwa penulisan properti header dituliskan secara Proper Case atau setiap kata diawali dengan huruf kapital dan setiap katanya dipisahkan oleh tanda garis (-).

*/

// untuk mengubah tipe konten menjadi JSON
// response.setHeader('Content-Type', 'application/json');
// response.setHeader('X-Powered-By', 'NodeJS');
