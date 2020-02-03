const targetTerdekat = arr => {
  let xIndex = String(), oIndex = String(), distance = Array(), shortest = 999999999
  for(i = 0; i < arr.length; i++) {
    if (arr[i] == 'x') {
      xIndex += i
    } else if (arr[i] == 'o') {
      oIndex += i
    } else distance[0] = 0
  }
  for(i = 0; i < xIndex.length; i++) {
    xIndex > oIndex ? distance[i] = xIndex[i] - oIndex : distance[i] = oIndex - xIndex[i]
  }
  for(i = 0; i < distance.length; i++) {
    if (shortest > distance[i]) {
      shortest = distance[i]
    }
  }
  return shortest
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2