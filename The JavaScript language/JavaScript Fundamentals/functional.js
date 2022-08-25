const person = Object.freeze({
    a: 1
});
console.log(person);
person.a = 20;
console.log(person);
const num = Object.freeze([1,2,3,4]);
console.log(num);
const x = ([...num,num.length]);
x.pop();
x.pop();
x.pop();
console.log(x);