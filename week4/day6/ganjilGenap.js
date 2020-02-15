/**
    *  =======================
    *  RAZIA GANJIL GENAP
    *  =======================
    *
    * [Description]
    * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
    * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
    * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
    * yang tidak sama dengan aturan ganjil genap
    *
    * [Instructions]
    * 1. Function menerima parameter berupa tanggal, data kendaraan
    * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
    * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
    * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
    * 5. Berlaku hanya untuk MOBIL.
    * 6. Lokasi Ganjil Genap
    *   - Gajah Mada
    *   - Hayam Wuruk
    *   - Sisingamangaraja
    *   - Panglima Polim
    *   - Fatmawati
    *   - Tomang Raya
    *
    * [Rules]
    * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
    */
   function kenaRazia(date, data) {
    let listLokasi = ['Gajah Mada', 'Hayam Wuruk', 'Sisingamangaraja', 'Panglima Polim', 'Fatmawati', 'Tomang Raya']
    let oddOrEven  = date % 2, arr = [], obj = {}, result = []
    //write your code here
    if (date <= 31) {
      for (let i = 0; i < data.length; i++) {
        let tilang = 0
        for (let j = 0; j < data[i].rute.length; j++) {
          for (let k = 0; k < listLokasi.length; k++) {
            // let matches = data[i]['plat'].match(/(\d+)/) // // using regex
            let matches = ''
            // console.log(data[i].plat)
            for (let l = 0; l < data[i].plat.length; l++) {
              if (Number(data[i].plat[l])) {
                matches += data[i].plat[l]
              }
            }
            // console.log(matches)
            if(data[i].rute[j] == listLokasi[k] && matches % 2 !== oddOrEven) {
              tilang++
              obj = {
                  name: data[i].name,
                  tilang: tilang
                }
              arr.push(obj)
            }
          // // using regex
          //   if(data[i].rute[j] == listLokasi[k] && matches[0] % 2 !== oddOrEven) {
          //     tilang++
          //     obj = {
          //         name: data[i].name,
          //         tilang: tilang
          //       }
          //     arr.push(obj)
          //   }
          }
        }
        if (arr.length) {
          for (let j = 0; j < arr.length-1; j++) {
            arr[j].name != arr[j+1].name ? result.push(arr[j]) : null
          }
        }
      }
    }
    result.push(arr[arr.length-1])
    return result
   }

    console.log(kenaRazia(27, [{
      name: 'Denver',
      plat: 'B 2791 KDS',
      type: 'Mobil',
      rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
    },
    {
      name: 'Toni',
      plat: 'B 1212 JBB',
      type: 'Mobil',
      rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
    },
    {
      name: 'Stark',
      plat: 'B 444 XSX',
      type: 'Motor',
      rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
    },
    {
      name: 'Anna',
      plat: 'B 678 DD',
      type: 'Mobil',
      rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
    },
    ])) 
// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]