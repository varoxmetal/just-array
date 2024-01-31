const items = [1,2,3,4,3,2,,3,4,4,5,3,2,1]

const resp = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    }
    else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(resp);


const data = [
    { name: "Nicolas", level: "low", },
    { name: "Andrea", level: "medium", },
    { name: "Zulema", level: "hight", },
    { name: "Santiago", level: "low", },
    { name: "Valentina", level: "medium", },
    { name: "Lucia", level: "hight", },
  ]

  const resp2 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    }
    else {
        obj[item] = obj[item] + 1
    }
    return obj
  }, {})

  console.log(resp2);

  //Excercise
  const numbers = [3,3,3,3,8,8,8,9,9]

  const resp3 = numbers.reduce((obj, item) => {
    if(item <= 5) { obj['1-5'] += 1 }
    if(item >= 6 && item <= 8) { obj['6-8'] += 1 }
    if(item >= 9 && item <= 10) { obj['9-10'] += 1 }
    return obj
  }, {'1-5': 0, '6-8': 0, '9-10': 0})

  console.log(resp3);