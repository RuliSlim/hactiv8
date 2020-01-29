// Tugas 1
const shoutOut = () => 'Halo Function!'

console.log('No 1')
console.log(shoutOut() +'\n')
// Tugas 2
let num1 = 5
let num2 = 6
const calculateMultiply = (num1, num2) => num1 * num2
const hasilPerkalian = calculateMultiply(num1,num2)

console.log('No 2')
console.log(hasilPerkalian+'\n')

// Tugas 3
let name = "Agus"
let age = 30
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming"
const processSentence = (name, age, address, hobby) => `Nama saya ${name}, umur saya ${age}, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}!`


const fullSentence = processSentence(name,age,address,hobby)
console.log('No 3')
console.log(fullSentence +'\n')