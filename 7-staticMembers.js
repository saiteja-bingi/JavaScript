// instance variables and static variables
// instance methods and static methods

class Student{
    constructor(pid,pname){
        // instance properties
        this.pid=pid;
        this.name=pname;
    }
    // static members /properties
    static collegeName="VNR"
    static pincode=1234

    // instance methods (methods canbe called using object name)
    getname(){
        return this.name;
    }

    static getCollege(){
        return Student.collegeName
    }
}

let s1=new Student(123,"Raju")
console.log(s1);
console.log(Student.pincode)
console.log(Student.getCollege())