const groupAnimals = arr => {
  let result = Array()
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  arr.push([]) // biar unta termasuk
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j][0] == arr[j+1][0]) {
      result.push([arr[j], arr[j+1]])
    } 
    if (arr[j][0] != arr[j+1][0] && arr[j-1][0] != arr[j][0]) {
      result.push([arr[j]])
    }
  } 
  return result
}

// // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]