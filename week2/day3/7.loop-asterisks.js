// 1. Menyusun Barisan Bintang
console.log('No 1')
let rows1 = 5
for (let i = 1; i <= rows1; i++) {
  console.log(`*`)
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('No 2')
let rows2 = 5
for (let i = 1; i <= rows2; i++) {
  let bintang = '*'
  for (var j = 1; j < rows2; j++) {
    bintang = '*' + bintang
  }
  console.log(`${bintang}`)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('No 3')
let rows3 = 5
for (let i = 1; i <= 1; i++) {
  let bintang = '*'
  for (let j = 1; j<= rows3; j++) {
    console.log(`${bintang}`)
    bintang = '*' + bintang
  }
}