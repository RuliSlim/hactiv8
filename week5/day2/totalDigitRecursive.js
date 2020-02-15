// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

// Contoh:

// 512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

//TODO: STILL HARCODE
// Code
function totalDigitRekursif(angka) {
  // you can only write your code here!
  let result = 0
  if(angka < 10) {
    return angka;
  }
  else {
    let temp = '' + angka
    if (temp.length == 2) {
      result += Number(temp[0]) + totalDigitRekursif(Number(angka - (temp[0]*10) ))
      return result
    }
    if (temp.length == 3) {
      result += Number(temp[0]) + totalDigitRekursif(Number(angka - (temp[0]*100) ))
      return result
    }
    if (temp.length == 4) {
      result += Number(temp[0]) + totalDigitRekursif(Number(angka - (temp[0]*1000) ))
      return result
    }
    if (temp.length == 5) {
      result += Number(temp[0]) + totalDigitRekursif(Number(angka - (temp[0]*10000) ))
      return result
    }
  }
}

// // TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(513)); // 9
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11)); // 2
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(1)); // 1
console.log(totalDigitRekursif(0)); // 0