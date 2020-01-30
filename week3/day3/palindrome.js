const palindrome = kata => {
  let kata2 = new(String)
  for (let i = kata.length-1; i >= 0; i--) {
    kata2 += kata[i]
  }
  return kata2 === kata ? true : false
}
t

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false