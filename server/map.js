const letters = ['a','b','c']

const newArrayFor =[]
for (let i = 0; i < letters.length; i++) {
    const element = letters[i]
    newArrayFor.push(element + '++')
}
console.log('for', newArrayFor)

const newArrayMap = letters.map(item => item + '++')
console.log('map', newArrayMap)