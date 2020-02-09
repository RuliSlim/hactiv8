const graduates= students => {
  let result = {}
  for (let i = 0; i < students.length; i++) {
    // console.log(`loop ke - ${i}`)
    // console.log(students[i])
    result[students[i].class] = []
  }
  // console.log(result)
  for (let j = 0; j < students.length; j++) {
    if (students[j].score > 75) {
      result[students[j].class].push(students[j])
      delete students[j].class
      // console.log(students[j])
    }
    // BELOW THIS IS HARDCODE
    // if (students[j].class == 'wolves' && students[j].score > 75) {
    //   result.wolves.push(students[j])
    //   // console.log(students[j])
    // }
    // if (students[j].class == 'tigers' && students[j].score > 75) {
    //   result.tigers.push(students[j])
    //   // console.log(students[j])
    // }
  }
  // console.log(result)
  return result
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
