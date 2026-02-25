// camelcase(lower and upper)
// use lower camelcase(findSumOfNumbers)


// Functions

// 1.function declaration

function funcToSum(a,b){
    return a+b
}

// no variables for parameters and instead of return type use 'function'
// it allows to call even before its declaration




// 2.function expression

let findSum=function(a,b){
    return a+b
}

console.log(findSum(10,20))

// store function inside variable 
// you cannot call before its declaration


// 3. arrow function
let a=(a,b)=>a+b
console.log(a(10,20))


// hoisting

// all declartions are moved up
// and then at execution time the values are stored

console.log(d)
var d=10 //undefined

//in compilation it is like:
// var d;
// console.log(d)
// d=10

// var is old type for declararion of variables use let or const



// closure

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3

//A closure is when a function remembers variables from its outer scope even after the outer function has finished executing.