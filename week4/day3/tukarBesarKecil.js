// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

// Code
// function tukarBesarKecil(kalimat) {
//   // you can only write your code here!
// }

const tukarBesarKecil = kalimat => {
  let lil = 'abcdefghijklmnopqrstuvwxyz', cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', result = ''
  for (let i = 0; i < kalimat.length; i++) {
    let temp = 0
    for (let j = 0; j < lil.length; j++) {
      kalimat[i] === lil[j] ? 
        temp = j : // result += kalimat[i] = cap[j] :
        kalimat[i] === cap[j] ?
         temp = j : // result += kalimat[i] = lil[j] : 
         null // result += kalimat[i]
    }
    kalimat[i] === lil[temp] 
      ? result += cap[temp] 
      : kalimat[i] === cap[temp] 
      ? result += lil[temp] 
      : result += kalimat[i]
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"