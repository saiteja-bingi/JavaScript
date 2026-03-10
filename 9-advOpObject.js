class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    
}

let s=new Student("hello",123);

// get all keys
console.log(Object.keys(s))

// get values
console.log(Object.values(s))

// freeze (freeze the objects from modifying)
Object.freeze(s)
s.id=133
console.log(s)