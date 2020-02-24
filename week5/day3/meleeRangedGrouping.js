function meleeRangedGrouping (str) {
  //your code here
  let result = [], name = '', range = [], melee = []
  for (let i = 0; i < str.length; i++) {
    if (str[i]+str[i+1] == '-R') {
      range.push(name)
      name = ''
    } else if (str[i] == ',') {
      name = ''
    } else if (str[i] + str[i+1] == '-M') {
      melee.push(name)
      name = ''
    } else {
      name += str[i]
    }
  }
  result.push(range)
  result.push(melee)
  return result[0].length ? result : []
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []