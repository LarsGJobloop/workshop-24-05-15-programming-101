console.log("hello world")

// Data typer som vi kan lagre i variabler

var dontUse = 10

// Primitivene
let myBoolean = false
let myNumber = 3232
let myString = "helllo world"

let myUndefined = undefined
let myNull = null

console.log(myBoolean)
console.log(myNumber)
console.log(myString)

// Kompositter/Referantial types
const myListOfNumbers = [1, 2, 3, 4]
console.log(myListOfNumbers)
// hente ut enkelt elementer
console.log(myListOfNumbers[0])

const myListOfNames = ["Lars", "Kristoffer", "Kai", "Julie"]
console.log(myListOfNames[1])

const myMixedList = [1, "foo", false]
const myMultidimensionalArray = [
    [1, 1, 2, 3],
    [2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 3, 4, 5],
]

// Objekter
const lars = {
    name: "Lars Gunnar",
    gender: "male",
    age: 34,
}
console.log(lars)
console.log(lars.gender)

let ikkeEksisterendesVariable
console.log(ikkeEksisterendesVariable)

const todo = {
    title: "Vask huset",
    isComplete: false,
}

