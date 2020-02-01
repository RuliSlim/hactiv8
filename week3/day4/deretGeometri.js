const tentukanDeretGeometri = arr => {
  let subArr = new Array(arr.length-1), total = 0
  for (let i = 0; i < subArr.length; i++) {
    subArr[i] = arr[i+1] / arr[i]
  }
  for (let i = 0; i < subArr.length; i++) {
    total += subArr[i]
  }
  return total / subArr.length == subArr[0]
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false