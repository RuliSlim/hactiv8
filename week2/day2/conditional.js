// CodeCademy JS

https://imgur.com/a/9C1zamZ

// // If else statement
// // Game proxitia

let name,
    peran;

if (name) {
  console.log(`Halo ${name}, Pilih peranmu untuk memulai game!`)
} else if (name && peran === 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${name} \n
    Halo ${peran} ${name}, kamu dapat menyerang dengan senjatamu!`)
} else if (name && peran === 'Tabib') {
  console.log(`Selamat datang di Dunia Proxytia, ${name} \n
  Halo ${peran} ${name}, kamu akan membantu temanmu yang terluka.`)
} else if (name && peran === 'Wizard') {
  console.log(`Selamat datang di Dunia Proxytia, ${name} \n
  Halo ${peran} ${name}, ciptakan keajaiban yang membantu kemenanganmu`)
} else {
  console.log('Nama harus diisi!')
}

// Switch

let hari,
    bulan,
    tahun;

switch (bulan) {
  case 1 || '1':
    console.log(`${hari} Januari ${tahun}`)
  break
  case 2 || '2':
    console.log(`${hari} Februari ${tahun}`)
  break
  case 3 || '3':
    console.log(`${hari} Maret ${tahun}`)
  break
  case 4 || '4':
    console.log(`${hari} April ${tahun}`)
  break
  case 5 || '5':
    console.log(`${hari} Mei ${tahun}`)
  break
  case 6 || '6':
    console.log(`${hari} Juni ${tahun}`)
  break
  case 7 || '7':
    console.log(`${hari} Juli ${tahun}`)
  break
  case 8 || '8':
    console.log(`${hari} Agustus ${tahun}`)
  break
  case 9 || '9':
    console.log(`${hari} September ${tahun}`)
  break
  case 10 || '10':
    console.log(`${hari} Oktober ${tahun}`)
  break
  case 11 || '11':
    console.log(`${hari} November ${tahun}`)
  break
  case 12 || '12':
    console.log(`${hari} Desember ${tahun}`)
  break
  default:
    console.log(`invalid`)
  break
}