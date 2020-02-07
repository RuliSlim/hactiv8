
var kotakPensil = ['pulpen', 'penggaris', 'type-x']
var kotalPensil2 = ['penghapus', 'penggaris', 'type-x', 'penghapus', 'pencil']


const alatTulis = (arr1, arr2) => {
  let result = []
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  // console.log(arr1)
  for (let j = 0; j < arr1.length; j++) {
    let check = false
    for (let k = 0; k < result.length; k++) {
      if (result[j] == arr1[k]) {
        check = true
      }
    }
    if (check == false) {
      // console.log(result)
      result.push(arr1[j])
    }
  }
  // console.log(arr1)
  return result
}

console.log(alatTulis(kotakPensil, kotalPensil2))



const alatTulis2 = arr => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    var check = false
    for (let j = 0; j < result.length; j++) {
      if (result[j][0] == arr[i]) {
        check = true
        result[j].push(arr[i])
      }
    }
    if (check == false) {
      result.push([arr[i]])
    }
  }
  return result
}

console.log(alatTulis2(alatTulis(kotakPensil, kotalPensil2)))



let nilai = [
  ['padul', 80],
  ['yoyo', 180],
  ['akmalia', 1],
  ['kholid', 70]
]

const sortScore = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][1] < arr[i][1]) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

console.log(sortScore(nilai))


// let list = [
//   ['audrick', [90, 80, 70]],
//   ['taufik', [100, 100, 50]],
//   ['ayu', [48, 68, 80]]
// ]

// const sortAvg = arr => {
//   let total = 0, rata2 = 0, result = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i][1].length; j++) {
//       total += arr[i][1][j]
//     }
//     rata2 = total / arr[i][1].length
//     result.push([rata2, arr[i][0]])
//   }
//   for (let i = 0; i < result.length; i++) {
//     for (let k = i+1 <)
//   }
//   return result
// }

// console.log(sortAvg(list))