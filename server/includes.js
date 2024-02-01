const pets = ['cat', 'dog', 'bat']

let resp = false
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'cat') {
        resp = true
        break
    }
}
console.log(resp);

const resp2 = pets.includes('cat')
console.log(resp2);