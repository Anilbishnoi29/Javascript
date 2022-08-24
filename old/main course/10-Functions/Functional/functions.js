'use strict';
let arr = [1,2,null,5,null];
let notNull = function (arrayName) {
    return arrayName === null;
};
let numberArr = arr.filter(arr => arr !== null);
console.log(numberArr);

const myfun = new Function('a','b','return a*b');
console.log(myfun(2,3));

const obj = {
    1: 5,
    2: 'San Francisco',
    length: this.lengths
};
function getKey(k) {
    return `a key named ${k}`;
}
console.log(obj.length);
