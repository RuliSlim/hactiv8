// Problem
// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

// Code
// function urutkanAbjad(str) {
//   // you can only write your code here!
// }
// if (arr[j] > arr[j+1]) {
//   let temp = arr[j]
//   arr[j] = arr[j+1]
//   arr[j+1] = temp
// 
// THIS IS NOT EFFICIENT
const urutkanAbjad = str => {
  let copy = [], result = ''
  for (let i = 0; i < str.length; i++) {
    copy.push(str[i])
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if(copy[j] > copy[j+1]) {
        let temp = copy[j]
        copy[j] = copy[j+1]
        copy[j+1] = temp
      }
    }
  }
  for (let i = 0; i < copy.length; i++) {
    result += copy[i]
  }
  return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'