const angkaPrima = angka => {
  let zero = []
  for (i = 1; i < angka; i++) {
    zero.push(angka % i)
    for (let j = 0; j < zero.length; j++) {
      if (zero[j] > zero[j+1]) {
        let temp = zero[j]
        zero[j] = zero[j+1]
        zero[j+1] = temp
      }
    }
  }
  return zero[0] !== zero[1]
}

// // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false