const elements = ['Fire','Air','Water']

let resp = ''
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    resp += element + '--'
}
console.log(resp);

const resp2 = elements.join('--')
console.log(resp2.tol);