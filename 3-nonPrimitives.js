// arrays are ordered collection of elements
arr=[10,"marks",'vinay',true]
console.log(arr)

// object is set of properties

let obj ={
    name:'vinay',
    age:3
}
console.log(obj)
console.log(obj.name)
console.log(obj["name"])
// it is same like dictionary in python

// fuction is also a callable object
let funct=function(){

}


//--------->>>> Basic operations in object<<<<-------------
let emp={
    a:'1',
    b:'2'
}

// accessing properties
console.log(emp)
console.log(emp.a) //dot notation
console.log(emp['a']) //bracket notation

// for in loop for looping the  prop in object
for(let x in emp){
    console.log(emp[x])  //bracket notaion is used
}

// insertion-dynamically
emp.c=3
console.log(emp)

// remove property
delete emp.a
console.log(emp)

// update values
emp.b=10
console.log(emp)

// complex object
const student = {
  name: "Sai",
  age: 20,
  address: {
    city: "Hyderabad",
    pincode: 500001
  }
};

console.log(student.address.city); 
// Hyderabad