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

// Du kan utføre matemetikk på variablene
const numberA = 10
const numberB = 32
const numberC = numberA * numberB + 10
console.log(numberC)

// Strenger kan og kombineres
const stringA = "Foo"
const stringB = "Bar"
const stringC = stringA + stringB
console.log(stringC)

// String Templates
const personName = "Lars"
const greeting = `Greeting ${personName}!!!`
console.log(greeting)

// Boolean Operasjoner
const numberD = 10
const numberE = 15
const isGreater = numberD > numberE
console.log(isGreater)

const nameA = "Lars"
const nameB = "Lars"
const isEqual = nameA === nameB
console.log(isEqual)

// Forgreninger

// if else

const personA = {
    name: "Kai",
    age: 17,
}

if (personA.age > 18) {
    console.log(`${personA.name} is old enough to enter`)
} else {
    console.log(`${personA.name} need to wait some years`)
}

console.log("if else block finsihed")

// Løkker
let count = 1
while (count <= 10) {
    console.log(count)
    count = count + 1
}

for (let count = 1; count <= 10; count++) {
    console.log(count)
}

const names = [
    "Lars",
    "Kai",
    "Julie",
    "Fredrik",
    "Janus",
]

console.log(names.length)

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}

for (const name of names) {
    console.log(name)
}

// Funksjoner og Moduler
function greetPerson(name) {
    console.log("Greeting " + name)
}
greetPerson("Lars")

function multiple(numberA, numberB) {
    const result = numberA * numberB
    return result
}

const resultA = multiple(10, 20)
console.log(resultA)
