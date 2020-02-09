// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code
// function naikAngkot(arrPenumpang) {
//   rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//   //your code here
// }

const naikAngkot = arrPenumpang => {
    rute = ['A', 'B', 'C', 'D', 'E', 'F']
    let result = []
    for (let i = 0; i < arrPenumpang.length; i++) {
      result.push({
        penumpang: '',
        naikDari: '',
        tujuan: '',
        bayar: 0
      })
      result[i].penumpang = arrPenumpang[i][0]
      result[i].naikDari = arrPenumpang[i][1]
      result[i].tujuan = arrPenumpang[i][2]
      for (let j = 0; j < rute.length; j++) {
        let indexTujuan = '', indexAwal = '';
        result[i].tujuan == rute[j] ? indexTujuan = j : null
        result[i].naikDari == rute[j] ? indexAwal = j : null
        result[i].bayar = (indexTujuan - indexAwal - 1) * 2000
        result[i].bayar <= 0 ? result[i].bayar *= -1 : null
      }
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]