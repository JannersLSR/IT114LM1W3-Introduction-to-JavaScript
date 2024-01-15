/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
let doubled = numbers.map(item => item * 2)

console.log(doubled)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

let filter = numbers.filter(item => item % 2 === 0)

console.log(filter)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

let reduce = numbers.reduce(function (result, item) {
    return result + item
}, 0 )

console.log(reduce)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

let uppercase = words.map(item => item.toUpperCase())

console.log(uppercase)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

let fourLetters = words.filter(item => item.length >= 4)

console.log(fourLetters)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

let combine = words.reduce(function (result, item) {
    return result + item
})

console.log(combine)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map can apply functions within the array, Filter can apply a conditional function, and Reduce can reduce the value of the array 