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
class Teacher extends Person {
    get FullName() {
        return "professor" + " " + super.FullName;
    }
}
class Principle extends Person {
    get FullName() {
        return "Principle" + " " + super.FullName;
    }
}
printNames([
    new Student(1, "Ankit", "Singh"),
    new Teacher("Ashwanee", "Gupta"),
    new Principle("Nitin", "Singh")
]);
function printNames(people) {
    for (let person of people)
        console.log(person.FullName);
}
//# sourceMappingURL=inherit.js.map