/**
 * 
 * 
 # Slice and dice!
## Objectives
- Mampu membuat function serupa built in function sederhana JavaScript
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu mengakses sebuah array
## Directions
Diberikan sebuah function bernama slice dimana function tersebut menerima tiga paramter.
- Parameter pertama bernama `data` bertipe array
- Parameter kedua bernama `start` bertipe number (optional)
- Parameter ketiga bernama `end` bertipe number (optional)
 Function akan mengembalikan nilai array yang telah dipotong/slice sesuai dengan value dari paramter `start` dan `end`
 Array yang di return merupakan potongan array `mulai dari start hingga sebelum end`
 ***ASUMSI:***
 - variabel `start` bisa tidak diisi (berarti end-nya juga kosong). Jika hal ini terjadi maka pemotongan data array dimulai dari index ke 0
 - jika value variabel `start` lebih besar dibandingkan jumlah data array, maka function akan mengembalikan array kosong
 * 
 * 
 * Rules :
 * - Dilarang menggunakan built-in function .slice .split .splice etc
 */

 
function slice(data, start, end){

  let result = []
  if (end) {
    for (i = start; i < end; i++) {
      result.push(data[i])
    }
  } else {
    for (i = start; i < data.length; i++) {
      result.push(data[i])
    }
  }
  return !start && !end ? data : result
}

//DRIVER CODE
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]