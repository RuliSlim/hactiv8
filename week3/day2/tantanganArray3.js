// ## METHOD 1
const input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
const dataHandling2 = (arr, index, replace, data, ...rest) => arr.splice(index, replace, data, ...rest)

dataHandling2(input, 1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
console.log(input)

// # METHOD 2 using same function
// dataHandling2(input, 1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
// dataHandling2(input, 4, 1, "Pria", "SMA Internasional Metro")
// console.log(input)

// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

// Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan "Januari"
// Gunakan switch case untuk menuliskan bulan di atas.
// Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

const dataHandling3 = (arr, index) => {
  let date = arr[index], month =''
  // date.join(' ')
  month = date.join(' ')
  console.log(month)
}
dataHandling3(input, 3)

// Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

// Test-case
// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

// var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// dataHandling2(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */

