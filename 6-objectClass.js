let person={
    pid:1000,
    pname:"name"
}

// constructor function(multiple objects of same type)
    // create blueprint
        // function name should be upper camelcase

    function Person(pid,name){
        // object initialization logic
        this.id=pid;
        this.name=name;
        this.method=function(){
            return this.name;
        }
    }

    // create objects for the blueprint
    let p1=new Person("arun",1234)
    console.log(p1.id)
    console.log(p1.method)

    // for every object the method is given it consumes more space hence prototype is used

    function Constructor(name,pid){
        this.name=name;
        this.pid=pid;
    }
    // add methods to prototypr of constructor
    Constructor.prototype.getname=function(){
        return this.name;
    }
    let p2=new Constructor("kk",1);
    console.log(p2.getname())


// class to create a blueprint

class NewClass{
    //  a special method to initialize the object
    constructor(pid,name){
        this.pid=pid;
        this.name=name;
    }
    // methods are automaticcally added to the prototype
    getname(){
        return this.name
    }
}

let p=new NewClass(123,"jj");
console.log(p.name)