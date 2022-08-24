// function execution context

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("harshit", "sharma");
// console.log(personName);

const arr = [1,2,3,4,5,6,7,8,9];
const arrMap = arr.map(function (num) { return num * num; });
console.log(arrMap);
const arrFind = arr.find(num => num > 5);
console.log(arrFind);

const obj = [
    { name: 'Max',age: 23 },
    { name: 'John',age: 20 },
    { name: 'Caley',age: 18 }
];

const found = obj.find(e => e.name === 'John');
console.log(found);

// for of loop
const userName = 'anil bishnoi';
for (let char of userName) console.log(char);

const dummy = {
    'firstName': 'Anil'
};
console.log(dummy);

const person = new Map();
person.set('firstName','Anil');
console.log(person.get('firstName'));

const user = {
    id: 1,
    address: {
        houseNumber: 123,
        zip: 890
    }
};
console.log(user?.address?.houseNumber);
