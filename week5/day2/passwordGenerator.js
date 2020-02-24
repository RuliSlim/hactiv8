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
  let alpha = 'aeiouAEIOUbfjpvBFJPV';
  let string = '';
  for(i=0; i<str.length; i++) {
    for(j=0; j < alpha.length/2; j++) {
      if (str[i] === alpha[j]) {
        string += alpha[j+10];
        break;
      }
      if (j === alpha.length/2 -1 ) {
        string += str[i];
      }
    }
  }
  return string;
}

function reverseWord (str) {
  //code di sini
  let string = '';
  for(i=str.length-1; i>=0; i--) {
    string += str[i];
  }
  return string;
}

function setLowerUpperCase (str) {
  //code di sini
  var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let string = '';
  for(i=0; i<str.length; i++) {
    for(j=0; j<alpha.length; j++) {
      if (str[i] === alpha[j]) {
        j<25? string += alpha[j+26] : string += alpha[j-26]
      }
    }
  }
  return string;
}

function removeSpaces (str) {
  //code di sini
  let string = '';
  for (i=0; i<str.length; i++) {
    if (str[i] !== ' '){
      string += str[i];
    }
  }
  return string;
}

function passwordGenerator (name) {
  //code di sini
  return name.length >= 5? removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))) : 'Minimal karakter yang diinputkan adalah 5 karakter';
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'