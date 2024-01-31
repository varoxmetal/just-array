const words = ["spray", "limit", "elite", "exuberant"]

const resp = []
for (let i = 0; i < words.length; i++) {
    const element = words[i]
    if(element.length >= 6) {
        resp.push(element)
    }
}
console.log('Original', words)
console.log('resp', resp);
console.log('Original', words)
const resp2 = words.filter(item => item.length >= 6)
console.log('resp2', resp2)
console.log('Original', words)

const orders = [
    { customerName: "Nicolas", total: 1000, delivered: true, },
    { customerName: "Zulema", total: 2000, delivered: false, },
    { customerName: "Santiago", total: 180, delivered: true, },
    { customerName: "Valentina", total: 240, delivered: true, },
]
console.log('original', orders);
let resp3 = orders.filter(item => item.delivered)
console.log('filtered', resp3)
console.log('original', orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log('search', search('ema'));