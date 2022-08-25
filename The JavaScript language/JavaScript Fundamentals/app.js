'use strict';
// forEach;
let num = [111,22,13,4,55,60,17,8];
num.forEach(item => console.log(item));

// use case 
let letters = ['a','b','c','d','d','a'];
let objOfLetterCount = {};
function count(char) {
    if (objOfLetterCount[char]) {
        objOfLetterCount[char]++;
    } else {
        objOfLetterCount[char] = 1;
    }
}
letters.forEach(char => {
    count(char);
});
console.log(objOfLetterCount);
console.log("map()");
let doubleNum = num.map(item => item * 2);
console.log(num,doubleNum);
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },{
        name: 'Desktop',
        price: 1500,
        count: 2
    },{
        name: 'phone',
        price: 500,
        count: 15
    }
];

// count total price sum
let totalPrice = products.map(item => ({
    name: item.name,
    totalPrice: item.price * item.count
}));
console.log(...totalPrice);
letters = ['1','2','3'];
const numbers = letters.map(Number);
console.log(numbers);

console.log("filter");

const evenNum = num.filter(num => num % 2 === 0);
console.log(evenNum);

const sumOfNum = num.reduce((acc,value) => acc + value);
console.log(sumOfNum);

const maxNum = num.reduce((acc,value) => (acc > value) ? acc : value);
console.log(maxNum);

let x = num.sort((a,b) => a - b);
console.log(x);
console.log(num);

const a = [1,2];
const b = [3,4];
const c = a.concat(b);
console.log(c);