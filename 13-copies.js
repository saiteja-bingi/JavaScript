// copies for primitives
let name="ravi"

let name2=name;
console.log(name2)
name="arjun"
console.log(name,name2)


// copies for non primitives

// 1. shallow copy
// using spread operator

let arr1=['name',18];
let arr2=[...arr1] // for array
// for object {...obj}
arr1[0]='tej'
console.log(arr1,arr2)

// but the problem is using spread it doesnt copy nested objects or arrays
// hence deep copy is used

// 2. Deep Copy

// using structuredClone

let arr3=structuredClone(arr1)
console.log(arr3)