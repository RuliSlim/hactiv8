// 1. Melakukan Looping Menggunakan While

let i = 0

console.log('LOOPING PERTAMA')
while (i <= 18) {
  i += 2
  console.log(`${i} - I love coding`)
}

console.log('LOOPING KEDUA')
while (i >= 2) {
  console.log(`${i} - I will become fullstack developer`)
  i -= 2
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for (let i = 1; i <= 20; i++) {
  console.log(`${i} - I love coding`)
}

console.log('LOOPING KEDUA')
for (let i = 20; i >= 1; i--) {
  console.log(`${i} - I will become fullstack developer`)
}

// 3. Angka Ganjil dan Genap


for (let i = 1; i <= 100; i++) {
  i % 2 === 0 ? console.log(`${i} - GENAP`) : console.log(`${i} - GANJIL`)
}

for (let i = 1; i <= 100; i += 2) {
  i % 3 === 0 ? console.log(`${i} - KELIPATAN 3`) : console.log('')
}

for (let i = 1; i <= 100; i += 5) {
  i % 6 === 0 ? console.log(`${i} - KELIPATAN 6`) : console.log('')
}

for (let i = 1; i <= 100; i += 9) {
  i % 10 === 0 ? console.log(`${i} - KELIPATAN 10`) : console.log('')
}