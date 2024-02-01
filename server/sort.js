const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];

const words = [ "réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana", ];


months.sort()
console.log(months);

numbers.sort((a,b) => a - b)
console.log(numbers)

words.sort()
console.log(words);

