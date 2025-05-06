class Person {
    constructor (public firstName : string , public lastName : string ){}

        get FullName () {
            return this.firstName + " " + this.lastName
        }

        walk () {
            console.log("Person Is walking" )
        }
    
}

class Student extends Person {
    constructor (public studentId : number , firstName : string ,lastName : string) {

    super(firstName , lastName)
    }

    talk () {
        console.log("Student Is Talking")
    }
}

let student = new Student (1,"Nitin","Singh")
console.log(student.FullName)
console.log(student.walk())
console.log(student.talk())
