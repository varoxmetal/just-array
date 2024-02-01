const numbers = [1,30,19,29,10,13]

let resp = true
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {
        resp = false
        break
    } 
}

console.log(resp);

const resp2 = numbers.every(item => item <= 40)
console.log(resp2);

const team = [
    { name: "Nicolas", age: 12, },
    { name: "Andrea", age: 8, },
    { name: "Zulema", age: 2, },
    { name: "Santiago", age: 18, },
  ]

  const resp3 = team.every(item => item.age < 15)
  console.log(resp3);