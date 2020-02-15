// Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

// Contoh:

// 3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.

// Code

function kaliTerusRekursif(angka) {
  let string = '' + angka, result = 1
  if (string.length < 2) {
    return angka
  }
  else {
    let rem = angka % 10, sub = angka - rem
    result += kaliTerusRekursif(angka - sub)
    return result
  }
}
// function kaliTerusRekursif(angka) {
//   // you can only write your code here!
//   let result = 0
//   if(angka < 10) {
//     return angka;
//   }
//   else {
//     let temp = '' + angka
//     if (temp.length == 2) {
//       result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*10) ))
//       temp = '' + result
//       if (temp.length < 2) {
//         return result
//       }
//       if (temp.length == 3) {
//         result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*100) ))
//         return result
//       }
//       // else {
//       //   result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*10) ))
//       //   return result
//       // }
//     }
//     if (temp.length == 3) {
//       result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*100) ))
//       return result
//     }
//     if (temp.length == 4) {
//       result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*1000) ))
//       return result
//     }
//     if (temp.length == 5) {
//       result += Number(temp[0]) * kaliTerusRekursif(Number(angka - (temp[0]*10000) ))
//       return result
//     }
//   }
// }

// // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6