// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

// Code
// function checkAB(num) {
//   // you can only write your code here!
// }

const checkAB = str => {
  let kamus = 'abcdefghijklmnopqrstuvwxyz', indexA = 0; indexB = 0
  for (let i = 0; i < str.length; i++) {
    str[i] == kamus[0]
      ? indexA = i
      : str[i] == kamus[1]
      ? indexB = i 
      : null
  }
  return indexA > indexB
    ? indexA - indexB == 4
    : indexB - indexA == 4
}

// TEST CASES
// console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false