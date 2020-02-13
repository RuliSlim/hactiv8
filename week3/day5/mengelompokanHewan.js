const groupAnimals = arr => {
  let result = [], alpha = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alpha.length; i++) {
    let tempResult = []
    for (let j = 0; j < arr.length; j++) {
      if (alpha[i] == arr[j][0]) {
        tempResult.push(arr[j])
      }
      if (j + 1 == arr.length && tempResult.length > 0) {
        result.push(tempResult)
      }
    }
  }
  return result
}

// WITHOUT ALPHA
// const groupAnimals = arr => {
//   let result = Array()
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   arr.push([]) // biar unta termasuk
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j][0] == arr[j+1][0]) {
//       result.push([arr[j], arr[j+1]])
//     } 
//     if (arr[j][0] != arr[j+1][0] && arr[j-1][0] != arr[j][0]) {
//       result.push([arr[j]])
//     }
//   } 
//   return result
// }

// // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// Convert to Object
// const groupAnimalsObject = arr => {
//   let result = {}
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   // arr.push([]) // biar unta termasuk
//   for (let j = 0; j < arr.length ; j++) {
//     // if (result[students[j].class] == undefined) {
//     //   result[students[j].class] = []
//     // }
//     // if (result[arr[j][0]] == undefined) {

//     // }
//     !result[arr[j][0]] ? result[arr[j][0]] = [] : null
//     // console.log(result)
//     result[arr[j][0]].push(arr[j])
//     // if (arr[j][0] == result[arr[j][0]]) {
//     //   result[arr[j][0]].push(arr[j])
//     // }
//     // if (arr[j][0] == arr[j+1][0]) {
//     //   result[arr[j][0]].push(arr[j])
//     // } 
//     // if (arr[j][0] != arr[j+1][0] && arr[j-1][0] != arr[j][0]) {
//     //   result[arr[j][0]].push(arr[j])
//     // }
//     // if (arr[j+1][0] != arr[j][0]) {
//     //   result[arr[j+1][0]].push(arr[j+1])
//     // }
//   }
//   return result
// }

// // // TEST CASES
// console.log(groupAnimalsObject(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // {a: ['ayam', 'anoa'],
// //  c: ['cacing'],
// //  k: ['kuda', 'kancil']}
// console.log(groupAnimalsObject(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]