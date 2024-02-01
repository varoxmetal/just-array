const matrix = [
    [1,2,3],
    [4,5,6,[20,30]],
    [7,8,9]
]

const newArray = []
for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i]
    for (let j = 0; j < array.length; j++) {
        const element = matrix[i][j];
        newArray.push(element)
    }   
}
console.log(newArray);

function myFlat (list) {
    let newList = []
    if (typeof list != 'object') return [list]
    list.forEach(element => {
        newList = newList.concat(myFlat(element))
    })
    return newList
}
console.log(myFlat(matrix))

const resp = matrix.flat(2)
console.log(resp);