class Person {
  constructor(public firstName: string, public lastName: string) {}

  get FullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Person Is walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  talk() {
    console.log("Student Is Talking");
  }
}

class Teacher extends Person {
  get FullName() {
    return "professor"+" " + super.FullName;
  }
}
printNames([
  new Student (1,"Ankit","Singh"),
  new Teacher ("Ashwanee", "Gupta")
])

function printNames (people : Person[]) {
  for (let person of people)
    console.log(person.FullName)
}

// let teacher = new Teacher("Nitin", " Singh");
// console.log(teacher.FullName);
