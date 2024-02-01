const numbers = [1,30,19,29,10,13]

let number
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 22) {
        number = 22
        break
    }
}
console.log(number);


const resp = numbers.find(item => item === 22)
console.log(resp);

const products = [
    { name: "Pizza", price: 12, id: '🍕' },
    { name: "Burger", price: 23, id: '🍔' },
    { name: "Hot dog", price: 34, id: '🌭' },
    { name: "Hot cakes", price: 355, id: '🥞' },
];

const resp2 = products.find(item => item.id === '🥞')
console.log(resp2);

const resp3 = products.findIndex(item => item.id === '🥞')
console.log(resp3);