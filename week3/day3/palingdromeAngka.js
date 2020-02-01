const angkaPalindrome = num => {
  let copy = num, copyStr = '', reverse = ''
 do {
   copy += 1
   copyStr = copy.toString()
   reverse = ''
    for(let j = copyStr.length-1; j >= 0; j--) {
      reverse += copyStr[j]
    }
 } while(copyStr != reverse)
 return copy
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001