/*
Response Status
Sejauh ini kita telah membahas banyak tentang request. Kita sudah mengenal dan menggunakan method, url, body request, kemudian memberikan respons sesuai dengan karakteristik request yang ada.

Meskipun kita sudah bisa membuat server merespons permintaan, tapi sebenarnya kita belum belajar lebih dalam mengenai respons. Untuk itu, mari beranjak membahas lebih detail mengenai parameter kedua dari fungsi request listener ini. 

Seperti yang sudah Anda ketahui pada modul pengenalan back-end, respons yang dibawa oleh server dibagi menjadi tiga bagian penting. Yang pertama status line, atau bisa kita sebut response status; yang kedua response header; dan yang ketiga response body. Kita bahas mulai dari response status dahulu yah. 

Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan. Status yang diberikan berupa kode (status code) dan pesan dari kode tersebut dalam bentuk teks (status message).

Indikasi keberhasilan request client ditentukan oleh response status code yang dikirim oleh server. Karena itu, tentu nilai status code tak bisa sembarang kita tetapkan. Status code haruslah bernilai 3 digit angka dengan ketentuan berikut:

100-199 : informational responses.
200 - 299 : successful responses.
300-399 : redirect.
400-499 : client error.
500-599 : server errors.

Fokus terhadap poin yang ditebalkan yah karena poin itu akan sering digunakan. Silakan eksplorasi lebih detail mengenai status code pada halaman MDN mengenai HTTP Status.

Pada Node.js, penetapan nilai status code pada response dilakukan melalui properti response.statusCode.

const requestListener = (request, response) => {
    // memberitahu client bahwa request resource yang diminta tidak ada.
    response.statusCode = 404;
};
Oh ya! Dari halaman MDN yang diberikan di atas, kita juga bisa melihat bahwa status code selalu diiringi dengan status message. Contoh 200 Ok, 400 Bad Request, dan 404 Not Found. Melalui status message ini kita dan juga client bisa paham maksud dari status kode.

Status message memiliki nilai standar sesuai dengan response code. Namun, kita bisa mengubahnya bila diperlukan. Untuk mengubah status message, Anda bisa gunakan properti response.statusMessage.

const requestListener = (request, response) => {
    response.statusCode = 404;
 
    // 404 defaultnya adalah 'not found'
    response.statusMessage = 'User is not found';
};
Ketahuilah bahwa Anda sebaiknya tidak mengubah statusMessage dari nilai default bila tidak diperlukan. Walaupun hanya sekadar menerjemahkannya menjadi “Tidak ditemukan”.

*/
