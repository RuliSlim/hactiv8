/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

1. store hargaDasar with value 25000
2. store umur with any value
3. store nama with any value
4. store kelahiran with any value
5. store hargaTiket without value
6. store status with Boolean value
7. check if status true or not
8. check umur, kelahiran
9. if umur < 2 then hargatiket 0
10. if umur 2-8 then harga tiket hargaDasar
11. if umur 11-18 then if status is false then hargaDasar times 1.5, else hargaDasar times 1.25
12. if umur >= 19 then if status is false then hargaDasar time 2, else hargaDasar times 1.5
13. if umur >= 120 or kelahiran < 1900 then display 'Invalid Age'
14. Then display nama and hargaTiket.

STORE hargaDasar with value 25000
  IF umur < 2 then hargaTiket 0
  IF umur 2-8 then hargaTiket = hargaDasar
  IF umur 11-18 then 
    IF status is false then hargaTiket = hargaDasar times 1.5
      display nama and hargaTiket
      else hargaTiket = hargaDasar times 1.25
            display nama and hargaTiket
    END IF
  IF umur >= 19 then
    IF status is false then hargaTiket = hargaDasar times 2
      display nama and hargaTiket
      else hargaTiket = hargaDasar times 1.5
      display nama and hargaTiket
    END IF
  else display 'Invalid Age'
  END IF