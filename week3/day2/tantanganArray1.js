const balikString = arr => {
  let result = new(String)
  for (let i = arr.length-1; i >= 0; i--) {
    result += arr[i]
  }
  return result
}

const input = "hello world!", array = ["h", "e", "l", "l", "o"]

console.log(balikString(input))
console.log(balikString(array))