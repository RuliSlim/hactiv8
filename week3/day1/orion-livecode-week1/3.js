/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var line = 'abcde&12345' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = '' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

// tulis kode kalian disini
const countStuf = (line, param) => {
  let total = 0, letters = 'abcdefghijklmnopqrstuvwxyz', num = '1234567890', nLetters = 0, nNum = 0, sigma = 0
  for (i = 0; i < line.length; i++) {
    for (j = 0; j < letters.length; j ++) {
      if (line[i] == letters[j]) {
        nLetters++
      }
    }
    for (j = 0; j < num.length; j++) {
      if (line[i] == num[j]) {
        nNum++
        sigma += Number(line[i])
      }
    }
    if (param == 'length') {
      total = nNum + nLetters
    }
    else if (param == 'letters') {
      total = nLetters
    }
    else total = sigma
  }
  return total
}

console.log(countStuf('abcde12345', 'sigma'))