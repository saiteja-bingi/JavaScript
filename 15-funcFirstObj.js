// functions are first class objects

// reasons:
// 1. fucntion can be stored in variable
// 2. function can send as argument
// 3. function can return another fucntion


// factory function
function greeter(time){
    return function(name){
        console.group(`good ${time} to ${name}`)
    }
}

let mg=greeter("morning")
let eg=greeter("evening")

mg('ravi')
eg('abhi')