const konversiMenit = menit => {
  let hour = Math.floor(menit/60), minute = menit % 60, zero = 0
  return (minute < 10 ? `${hour}:${zero}${minute}` : `${hour}:${minute}`)
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
