// Problem
// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

// Code
// function pasanganTerbesar(num) {
//   // you can only write your code here!
// }

const pasanganTerbesar = num => {
  let besar = num.toString().split('')
  let odd = [], 
  even = []
  if (besar.length % 2 == 0){
    for (let i = 0; i < besar.length; i++){
      odd[i % 2 !== 0] = besar[1]
      odd[i % 2 === 0] = besar[2]
      return odd
    }
  }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99