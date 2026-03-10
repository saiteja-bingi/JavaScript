function getData(){
    // make API request
    //fetch return promise because it takes time to fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json()) //extract response because it takes time to extarct json data so .json() gives promise
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

getData()

console.log("first")