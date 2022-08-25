// console.log(this);
// const Person = {
//     name: 'John',
//     age: 23,
//     agePlus: function (num) {
//         this.age = this.age + num;
//     },
//     printInfo: function () {
//         console.log(this === Person);
//         console.log(`${this.name} is ${this.age} old.`);
//     }
// };
// Person.agePlus(4);
// Person.printInfo();

// arrow function

// const Person = {
//     personName: 'John',
//     age: 23,
//     printInfo() {
//         console.log("Arrow function");
//         console.log("this === Person : ",this === Person);
//         console.log("this === window : ",this === window);
//         console.log(`${this.personName} is ${this.age} old.`);
//     }
// };
// Person.printInfo();

// call(), apply(), bind()
// const obj1 = {
//     firstName: 'John ',
//     lastName: 'Deo',
//     printFullName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// };

// obj1.printFullName();

// const obj2 = {
//     firstName: 'Ajay ',
//     lastName: 'Saini',
// };
// // function borrowing from obj1 to printFullName
// obj1.printFullName.call(obj2);

const obj1 = {
    firstName: 'John ',
    lastName: 'Deo',
};
const obj2 = {
    firstName: 'Ajay ',
    lastName: 'Saini',
};
// function to print full name outside of obj
let printFullName = function (hometown,state) {
    console.log(this.firstName + this.lastName + " form " + hometown + ", " + state);
};
printFullName.call(obj1,'Jaipur','Rajasthan'); // John Deo
printFullName.call(obj2,'Jaipur','Rajasthan'); // Ajay Saini
console.log("");
console.log("apply()========");
// use apply()
printFullName.apply(obj1,['Jaipur','Rajasthan']); // John Deo
printFullName.apply(obj2,['Jaipur','Rajasthan']); // Ajay Saini
console.log("");
console.log("bind()=========");
// bind() return a fun
let printInfo = printFullName.bind(obj2,'Kota','Rajasthan'); // 

printInfo();
