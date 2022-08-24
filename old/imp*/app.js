// The Concept of Data Types;
// let str = "Hello";
// str.test = 5;
// console.log(str.test);  
function addUp(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}
const result = addUp(600);
console.log(result);