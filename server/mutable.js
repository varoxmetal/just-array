    const products = [
        { title: 'Pizza', price: 121, id: '🍕' },
        { title: 'Burger', price: 121, id: '🍔' },
        { title: 'Hot cakes', price: 121, id: '🥞' },
    ];

    const myProducts = []
    let newProducts = [...products]

    console.log("products", products);
    console.log("myProducts", myProducts);
    console.log("-".repeat(10));

    const productIndex = products.findIndex(item => item.id === '🍔')
    if(productIndex !== -1) {
        myProducts.push(products[productIndex])
        newProducts.splice(productIndex, 1)
    }

    console.log("products", products);
    console.log("myProducts", myProducts);
    console.log('newProducts', newProducts)
    console.log("-".repeat(10));

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
]

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'tasty'
    }
}

const newProduct2 = products2.map(item => {
    if(item.id === update.id) {
        return {
            ...item,
            ...update.changes
        }
    }
    return{...item}
})

console.log(newProduct2)