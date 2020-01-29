const xo = str => {
  let x = new(Number), 
      y = new(Number)
  for (let i = 0; i < str.length; i++) {
    str[i]=='x' ? x++ : y++
  }
  return x == y ? true : false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true