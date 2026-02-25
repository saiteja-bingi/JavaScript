let arr=[10,20,30,40]
console.log(arr)

// accessing
console.log(arr[6]) //undefined-index is not available in array

// iteration
for(let v of arr){
    console.log(v,end='')
}

// insert elements
// at start
arr.unshift(10)
console.log(arr)
// at end
arr.push(10)
// at specific index
arr.splice(3,0,40)
console.log(arr)

// splice(index, no. of ele to delete, no of elements to add)

// delete elements
// at start
arr.shift()
console.log(arr)
// at end
arr.pop()
console.log(arr)
// at specific index
arr.splice(1,1,)
console.log(arr)

