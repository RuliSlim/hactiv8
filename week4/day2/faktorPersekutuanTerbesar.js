const fpb = (angka1, angka2) => {
  let fpb = []
  for (i = 1; i < angka1; i++) {
    angka1 % i == 0 && angka2 % i == 0 ? fpb.push(i) : false
  }
 return fpb[fpb.length-1]
}

// // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1