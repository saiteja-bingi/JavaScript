class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
class Student extends Person{
    constructor(name,age,id){
        super(name,age)
        this.id=id;
    }
}

let s= new Student("name",11,1234);
console.log(s)

// every class extends class called 'Object'(root constructor) 
// object(datatype)

