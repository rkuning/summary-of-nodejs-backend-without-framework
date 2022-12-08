/*
Response Body
Header respons menampung informasi terkait respons yang diberikan oleh server. Informasi dapat berupa status respons, MIME types, tanggal, atau informasi lainnya yang mungkin dibutuhkan oleh client. 

Walaupun kita bisa memberikan informasi apa pun, namun tidak semua informasi cocok disimpan di header. Informasi pada header hanya sebagai metadata atau informasi yang menjelaskan tentang sebuah data lain (data utama).

Selain header, HTTP respons juga membawa body (Anda mengetahui ini pada materi pola komunikasi client dan server). Di dalam body inilah data utama (atau bisa kita sebut konten) seharusnya disimpan.

Ketahuilah bahwa objek response yang berada pada parameter fungsi request listener adalah instance dari http.serverResponse. Di mana ia merupakan WritableStream. Masih ingat cara menulis data pada WritableStream? Nah, cara itulah yang digunakan untuk menuliskan data pada body response.

Seperti objek WritableStream lainnya, untuk menuliskan data pada respons kita bisa gunakan method response.write() dan diakhiri dengan method response.end().

const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};
Seperti yang sudah Anda ketahui juga, method end() pada WritableStream dapat digunakan untuk menulis data terakhir sebelum proses penulisan diakhiri. Jadi, untuk kasus di atas dapat dipersingkat penulisannya menjadi seperti ini.

const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};
Ketahuilah bahwa penting untuk menuliskan status dan header response sebelum Anda menuliskan data pada body. Karena tidak masuk akal bila Anda sudah menuliskan body, namun belum memberikan metadata terkait data apa yang hendak dikirim.

*/
