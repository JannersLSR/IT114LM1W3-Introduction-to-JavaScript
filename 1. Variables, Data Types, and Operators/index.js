/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var x = 10
console.log(x)

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let y = 10

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const constVar = 20
// let constVar = 1 // this will prompt an error

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is a global keyword, let is a local keyword, and const is an unchanging variable

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

var z = x + y
console.log("Z = ", z)


// Checkpoint 1.2 What operators did you use?
// Answer: Addition
// Your code here

/*var z = x + y
console.log("Z = ", z)*/

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

message1 = "Hello"
message2 = "World"

console.log(message1 + message2)

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

cat = true
dog = true

if (cat && dog === true) {
    console.log("Correct")
}


// Checkpoint 1.4 What operators did you use?
// Answer: && AND Logical Operator

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

animals = ["dog","cat","bird"]

console.log(0 in animals)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It returns as True because [] is a truthy in the context of it being false
// Your code here

console.log([] == false)