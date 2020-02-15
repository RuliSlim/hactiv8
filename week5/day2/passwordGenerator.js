// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  //code di sini
  let vocal = 'abcdefghijklmnopqrstuvwxyz', result =''
  for (let i = 0; i < vocal.length; i++) {
    let temp = ''
    for (let j = 0; j < str.length; j++) {
      // str[i] == (vocal[0] ||  || 'i' || 'o' || 'u') ? result += 
      if (i == 0 || i ==  4 || i == 8 || i == 14 || i == 20) {
        str[j] == vocal[i] ? 
          result += vocal[i+1] : 
          // str[j].toUpperCase() === vocal[i].toUpperCase() ?
          // result += vocal[i+1].toUpperCase() :
          // j == str.length -1 ?
          // result += str[i] :
          null
          result += str[i]
        // console.log(temp)
      }
      // result += temp
      // console.log(j, vocal[j])
      // 0 4 8 14 20 
    }
  }
  return result
}

function reverseWord (str) {
  //code di sini
  let result =''
  for (let i = str.length-1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  let result =''
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toLowerCase() ? result += str[i].toUpperCase() : result += str[i].toLowerCase()
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  let result = ''
  for (let i = 0; i < str.length; i++) {
    str[i] == ' ' ? result += '' : null
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  let vocal         = changeVocals(name)
      reversedWord  = reverseWord(vocal),
      lowerUpper    = setLowerUpperCase(reversedWord),
      noSpace       = removeSpaces(lowerUpper)
      // console.log(noSpace)
  return name.length > 5 ? lowerUpper : 'Minimal karakter yang diinputkan adalah 5 karakter'
}

console.log(changeVocals('a e i o u, A E I O U'));
// console.log(reverseWord(changeVocals('a e i o u, A E I O U'))); 
// console.log(setLowerUpperCase(reverseWord(changeVocals('a e i o u, A E I O U')))); 
// console.log(reverseWord(changeVocals('Sergei Dragunov'))); 
// console.log(reverseWord(changeVocals('Alexei'))); 


// console.log(passwordGenerator('a k e i o u, A E I O U')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'