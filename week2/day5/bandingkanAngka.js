// Logic Challenge - Bandingkan Angka
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. Jika kedua angka bernilai sama, function akan me-return -1.

// Code
// function bandingkanAngka(angka1, angka2) {
//   // you can only write your code here!
// }

const bandingkanAngka = (angka1, angka2) => angka2 > angka1 ? true : angka2 == angka1 ? '-1' : false

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false