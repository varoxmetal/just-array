const totals = [1,2,3,4]

let total = 0
for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    total += element
}
console.log(total);

const resp = totals.reduce((sum, item) => item + sum, 0)
console.log(resp)