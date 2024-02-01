const element = [1,1,2,2]
const otherElement = [3,3,4,4]

const newArray = [...element]
for (let i = 0; i < otherElement.length; i++) {
    const element = otherElement[i];
    newArray.push(element)
}
console.log(newArray);
console.log(element)
const resp = element.concat(otherElement)
console.log(resp);

element.push(...otherElement)
console.log(element);