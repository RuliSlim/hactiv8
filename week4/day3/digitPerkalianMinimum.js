// Problem
// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

// Code
// function digitPerkalianMinimum(angka) {
//   // you can only write your code here!
// }
const digitPerkalianMinimum = angka => {
  let container = [], result = 0
  for (let i = 1; i <= angka; i++) {
    for (let j = i; j <= angka; j++) {
      i * j == angka ?
        container.push([`${i}${j}`]) : null
    }
  }
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container[i].length; j++) {
      result = container[i][j].length
      if (result[j] > result[j+1]) {
        let temp = result[i]
        result[j] = result[j+1]
        result[j+1] = temp
      }
    }
  }
  return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4 why this is 4? it`s only 1*179 & 179 * 1
console.log(digitPerkalianMinimum(1)); // 2 why this is 2? it`s only 1*1