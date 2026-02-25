// CallBack function
// A callback function is a function that is passed as an argument to another function and is executed later.

// two types of callback functions

// 1. synchronous callback function

function add(a, b) {
    return a + b;
}

function calculate(x, y, operation) {
    return operation(x, y);   // callback executed immediately
}

let result = calculate(5, 3, add);
console.log(result);

// 2. Asynchronous callback Function
console.log("Start");

setTimeout(function() {
    console.log("Inside callback");
}, 2000);

console.log("End");



// Array Methods

// Filter (selection)
arr=[10,20,30,40,50,60]
let res=arr.filter((ele)=>ele%20==0)
console.log(res)

// Map (modification)
res=arr.map((ele)=>ele/5)
console.log(res)

// find
res=arr.find((ele)=>ele==90)
console.log(res)

// findindex
res=arr.findIndex((ele)=>ele==90)
console.log(res)

// reduce
res=arr.reduce((accumulator,ele)=>accumulator+ele)
console.log(res)

// for each (only iteration)
res=arr.forEach((ele,index)=>console.log(ele,index))

// sort
arr=[40,50,60,10,122]
arr.sort() // consider elements as string and sort in dictionary order
console.log(arr)

arr.sort((a,b)=>a-b) //sort in ascending order
console.log(arr)

arr.push(20)
res=arr.toSorted()
console.log(res)
console.log(arr)

// reverse
arr.reverse()
console.log(arr)