// ## METHOD 1
const input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

dataHandling2(input, 1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
console.log(input)

// # METHOD 2 using same function
// dataHandling2(input, 1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
// dataHandling2(input, 4, 1, "Pria", "SMA Internasional Metro")
// console.log(input)

const dataHandling3 = (arr, index) => {
  let month = new(String),
  date = arr[index].split('/')
  switch (date[1]) {
    case '01':
        month = 'Januari'
      break;
    case '02':
        month = 'Februari'
      break;
    case '03':
        month = 'Maret'
      break;
    case '04':
        month = 'April'
      break;
    case '05':
        month = 'Mei'
      break;
    case '06':
        month = 'Juni'
      break;
    case '07':
        month = 'Juli'
      break;
    case '08':
        month = 'Agustus'
      break;
    case '09':
        month = 'September'
      break;
    case '10':
        month = 'Oktober'
      break;
    case '11':
        month = 'November'
      break;
    case '12':
        month = 'Desember'
      break;
  }
  console.log(month)
  console.log(date.sort((a,b) => b-a))
  console.log(date.join('-'))
  console.log(arr[1].slice(0,15))
}
dataHandling3(input, 3)
// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */