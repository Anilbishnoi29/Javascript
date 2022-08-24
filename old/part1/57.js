// map method
// const numbers = [3,4,6,1,8];

// const square = numbers.map(number => number * number);
// numbers.map();
// console.log(square);

const users = [
    { firstName: "harshit",age: 23 },
    { firstName: "mohit",age: 21 },
    { firstName: "nitish",age: 22 },
    { firstName: "garima",age: 20 },
];

const firstName = users.map(user => user.firstName);
console.log(firstName);