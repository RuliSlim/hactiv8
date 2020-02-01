const tentukanDeretAritmatika = arr => {
  let subArr = new Array(arr.length-1), total = 0
  for (let i = 0; i < subArr.length; i++) {
    subArr[i] = arr[i+1] - arr[i]
  }
  for (let i = 0; i < subArr.length; i++) {
    total += subArr[i]
  }
  return total / subArr.length == subArr[0] 
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false