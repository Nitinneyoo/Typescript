"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get FullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Person Is walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    talk() {
        console.log("Student Is Talking");
    }
}
let student = new Student(1, "Nitin", "Singh");
console.log(student.FullName);
console.log(student.walk());
console.log(student.talk());
//# sourceMappingURL=inherit.js.map