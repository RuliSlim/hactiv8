/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = 'Joko' // silakan berikan nilai bebas
var nomor_ktp = '12345678' //silahkan berikan nilai bebas
var alamat = 'Bandung'// bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = 'large' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta

// //tulislah kode disini
// const harga = (name, nomor_ktp, alamat, jenis_rumah) => {
//   let jakarta = 100000, surabaya = 50000, yogyakarta = 45000, bandung = 90000
//   return  !name ? 'NAMA HARUS DIISI' : 
//             nomor_ktp.length < 4 ? 'NOMOR KTP TIDAK VALID' :
//             (alamat != 'Jakarta' || alamat != 'Surabaya' || alamat != 'Yogyakarta' || alamat != 'Bandung') ?
//               alamat == 'Jakarta' ? 
//                 jenis_rumah == 'kosan' ? 'Jenis rumah salah' :
//                   jenis_rumah == 'normal' ? total = name + ' ' + nomor_ktp + ' ' + jakarta + 30000 :  jenis_rumah == 'large' ?  total = name + ' ' + nomor_ktp + ' ' + jakarta + 50000
//               // : alamat == 'Surabaya' ? total = name + ' ' +  nomor_ktp + ' ' +  surabaya :
//               // : alamat == 'Yogyakarta' ? total = name + ' ' +  nomor_ktp + ' ' +  yogyakarta :
//               // : alamat == 'Bandung' ? total = name + ' ' +  nomor_ktp + ' ' +  bandung :
//               : 'Alamat tidak diketahui' 

// }

const harga = (name, nomor_ktp, alamat, jenis_rumah) => {
  let jakarta = 100000, surabaya = 50000, yogyakarta = 45000, bandung = 90000
  if (!name || name == ' ') {
    return 'NAMA HARUS DIISI'
  } else if (nomor_ktp.length < 4) {
    return 'NOMOR KTP TIDAK VALID'
  } else if (alamat != 'Jakarta' || alamat !== 'Surabaya' || alamat != 'Yogyakarta' || alamat != 'Bandung') {
    if(alamat == 'Jakarta') {
     if(jenis_rumah == 'kosan') {
       return 'Jenis rumah salah' 
      }
       else if (jenis_rumah == 'normal') {
        return total = name + ' ' + nomor_ktp + ' ' + Number(jakarta + 30000)
       } else {
        return total = name + ' ' + nomor_ktp + ' ' + Number(jakarta + 50000)
       }
    } else if (alamat == 'Surabaya') {
      if(jenis_rumah == 'kosan') {
        return 'Jenis rumah salah' 
       }
        else if (jenis_rumah == 'normal') {
         return total = name + ' ' + nomor_ktp + ' ' + Number(surabaya + 30000)
        } else {
         return total = name + ' ' + nomor_ktp + ' ' + Number(surabaya + 50000)
        }
     } 
     else if (alamat == 'Yogyakarta') {
      if(jenis_rumah == 'kosan') {
        return 'Jenis rumah salah' 
       }
        else if (jenis_rumah == 'normal') {
         return total = name + ' ' + nomor_ktp + ' ' + Number(yogyakarta + 30000)
        } else {
         return total = name + ' ' + nomor_ktp + ' ' + Number(yogyakarta + 50000)
        }
     } 
     else if (alamat == 'Bandung') {
      if(jenis_rumah == 'kosan') {
        return 'Jenis rumah salah' 
       }
        else if (jenis_rumah == 'normal') {
         return total = name + ' ' + nomor_ktp + ' ' + Number(bandung + 30000)
        } else {
         return total = name + ' ' + nomor_ktp + ' ' + Number(bandung + 50000)
        }
     } 
    else {
      return 'ALAMAT SALAH' }
  }
}

console.log(harga(name, nomor_ktp, alamat, jenis_rumah))
// console.log(nomor_ktp.length)