// variables not have data types but values have datatypes

// datatype - number is used for both integer and float values range-(2^53)
// bigint is used for more than range

let a;

// print datatype
console.log(typeof a)
console.log(a)

a=10
console.log(a,typeof a)

a="hello"
console.log(a,typeof a)


// JS is dynamically types language

a=[10,20,30]
a={
    a:'ravi',
    b:'dsao'
}
console.log(typeof a)

const b=10
// b=20 (b is already assigned, no new assignment)

const arr=[10,20,30]
arr.push(50) // works because we are modifying not reassigning
console.log(arr)

// arrays and objects are stored in heap
// primitive are stored in stack

// function is also a datatype


// operators

// strict equal is for comparing both values and datatypes

console.log(12==='12')