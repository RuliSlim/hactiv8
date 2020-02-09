// // Problem
// // Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// // Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// // Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// // John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
// // Code
// // function changeMe(arr) {
// //   // you can only write your code here!
// // }

// function person(firstName, lastName, gender, age){
//   this.firstName = firstName
//   this.lastName = lastName
//   this.gender = gender
//   age 
//     ? this.age = 2019 - age
//     : this.age = 'Invalid Birth Year'
// }
class person {
  constructor (firstName, lastName, gender, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    age 
      ? this.age = 2019 - age
      : this.age = 'Invalid Birth Year'
  }
}

const changeMe = arr => {
  let obj = Array(arr.length), result = ''
  for (let i = 0; i < arr.length; i++) {
    let firstName, lastName, gender, age
    for (let j = 0; j < arr[i].length; j++) {
      switch (j) {
        case 0:
          firstName = arr[i][j]
          break
        case 1:
          lastName = arr[i][j]
          break
        case 2:
          gender = arr[i][j]
          break
        case 3:
          age = arr[i][j]
          break
      }
    }
    obj[i] = new person(firstName, lastName, gender, age)
    result += i + 1 + '. ' + firstName + ' ' + lastName + '\n' + JSON.stringify(obj[i]) + '\n'
  }
  return result
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""