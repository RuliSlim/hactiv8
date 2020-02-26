/**
 * ==============================
 * Group by second-largest factor
 * ==============================
 * 
 * Kalian harus membuat sebuah function yang akan mengelompokkan angka-angka ke dalam suatu array berdasarkan faktor terbesar kedua dari angka-angka tersebut.
 * Faktor kedua terbesar adalah faktor yang paling besar sebelum angka itu sendiri. Sebagai gambaran, angka 6 memiliki faktor kedua terbesar 3. 
 * Karena faktor-faktor dari angka 6 adalah: 1,2,3,6. <- Angka 3 merupakan faktor paling besar sebelum angka itu sendiri (angka 6).
 * 
 * Angka-angka yang merupakan bilangan prima tidak akan menjadi input.
 * 
 * Output yang diharapkan adalah array multidimensi, dimana inner array berisi faktor kedua terbesar di index 0 dan index berikutnya berisi angka-angka 
 * yang merupakan bagian dari kelompok tersebut. Berikut ilustrasi-nya:
 * 
 * Input:[6,9,21]
 * Proses: - 6 memiliki faktor 1,2,3,6, maka faktor terbesar keduanya adalah 3
 *         - 9 memiliki faktor 1,3,9, maka faktor terbesar keduanya adalah 3
 *         - 21 memiliki faktor 1,3,7,21, maka faktor terbesar keduanya adalah 7
 *         - 6 dan 9 akan satu kelompok: ["3", 6, 9]
 *         - 21 akan berada di dalam kelompoknya sendiri ["7", 21]
 * Output: [["3", 6, 9],["7", 21]]
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push(), .toString(), dan parseInt()
 * 
 */

function groupSecondLargest(numbers) {
  //Implementasikan function ini
  let result = [], final = []
  for (let i = 0; i < numbers.length; i++) {
    let temp = []
    for (let j = 1; j < numbers[i]; j++) {
      // console.log(numbers[i])
      // console.log(j)
      if (numbers[i] % j == 0) {
        // console.log(numbers[i]%j)
        temp.push(j)
      }
    }
    result.push([temp[temp.length-1], numbers[i]])
  }
  // console.log(result)
  for (let i = 0; i < result.length; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i][0] == result[j][0]){
        // console.log(result[i])
        // console.log(result[j])
        final.push([result[i][0].toString(), result[i][1], result[j][1]])
      } else if (result[j][0] != result[i][0] && result[j][0]) {
        
        // console.log(result[i])
        // console.log(result[j])
      }
      // console.log(i)
      // console.log(j)
    }
    // final.push
  }
  return result
}

console.log(groupSecondLargest([28, 21, 27, 18])) //[ [ '14', 28 ], [ '7', 21 ], [ '9', 27, 18 ] 
console.log(groupSecondLargest([32, 16, 24, 18, 48])) //[ [ '16', 32 ], [ '8', 16 ], [ '12', 24 ], [ '9', 18 ], [ '24', 48 ] ]
console.log(groupSecondLargest([6, 9, 21])) //[ [ '3', 6, 9 ], [ '7', 21 ] ]

