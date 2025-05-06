// const enum Size {
//   small = 1,
//   medium,
//   large,
// }
// const mySize: Size = Size.medium;
// console.log(mySize); // Output: 2

// function

// function add(x: number, y: number): number {
//   return x + y;
// }

// function calculateTax(income:number,taxYear = 2025) : number{

//     if (taxYear < 2023) {
//         return income * 1.2;
//     }
//     return income * 1.5;
// }
// console.log(calculateTax(1000)); // Output: 1200

// Object

// let employee: {
//   readonly id: number;
//   name: string;
//   age: number;
//   position: string;
//   salary: number;
//   retire : (date : Date) => void;
// } = {
//   id: 1,
//   name: "John Doe",
//   age: 30,
//   position: "Software Engineer",
//   salary: 50000,
//   retire:(date:Date) => {
//     console.log(date);
//   }
// };

// // Type Allias 
// // .................................................................................

// type Employee = {
//   readonly id: number;
//   name: string;
//   age: number;
//   position: string;
//   salary: number;
//   retire : (date : Date) => void;
// }
// let employee2 : Employee = {
//   id: 1,
//     name: "John Doe",
//     age: 30,
//     position: "Software Engineer",
//     salary: 50000,
//     retire:(date:Date) => {
//       console.log(date);
//     }
// }

// Union Types 

function kgToLbs (weight : number | string) : number {
    if (typeof weight === 'number')
        return weight * 1.2
    return (Number.parseInt (weight) * 1.5)
}
kgToLbs("10");

// kgToLbs("10");