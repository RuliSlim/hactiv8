// const pasanganTerbesar = num => {
//   let besar = num.toString().split('')
//   let odd = new Array(besar.length/2), 
//   even = []
//   if (besar.length % 2 == 0){
//     for (let i = 0; i < besar.length/2; i++){
//       let j=i
//       j += i
//       i%2==0 ? odd[i] = besar[j] + besar[j+1] : odd[i] = besar[j] + besar[j+1]
//     }
//     return odd.sort((a, b) => b - a)[0]
//   } else return 'Input number invalid'
// }

const pasanganTerbesar = num => {
  let indexNum = new Number,
      numArray = num.toString().split(''),
      highestNum = num.toString().split('').sort((a,b) => b - a)[0]
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i]==highestNum) {
      indexNum = i
      break
    }
  }
  return highestNum + numArray[indexNum+1]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99