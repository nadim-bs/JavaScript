// array: collection of variables

let marks = new Array(20)
marks[0] = 70;
marks [19] = 80;
console.log(marks.length)

let fruits = ['apple', 'banana', 'guava', 'orange']

// some library function
// push: add the element at the end
fruits.push('Malta') // fruits = ['apple', 'banana', 'guava', 'orange', 'Malta']

// pop: remove the element from the end
fruits.pop() ; // fruits = ['apple','banana', 'guava', 'orange']

// shift: remove the element from first (opposit of pop)
fruits.shift();

// unshift: opposit of push
fruits.unshift('Cherry')

// splice:we can add and remove elements
fruits.splice(2,0,"Guava")

// slice: create new array. do not change the original array
let newArr = fruits.slice(1)

// sort, reverse, etc.


let country1 = ['Bangladesh', 'India']
let country2 = ['Pakistan', 'Afghanistan']
let country = country1.concat(country2)
console.log(country)

// loop through array
for (let i = 0; i<country.length; i++){
    console.log(country[i])
}