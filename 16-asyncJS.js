// all previous are synchronous

// 1. timers
setTimeout(()=>{
        console.log("heyyy")
},3000) //timeout in milli second (1000)->10sec
console.log("hello")


// 2. Promises
let condition=false;
// create a promise
let prom=new Promise((fullfilled,rejected)=>{
    setTimeout(() => {
        if(condition){
            fullfilled("Hello fullfilled")
        }
        else{
            rejected("sorry!!!")
        }
    }, 4000);
})

// consume the promise
prom
.then(message=>console.log("fullfilled:",message))
.catch(message=>console.log("rejected:",message))

