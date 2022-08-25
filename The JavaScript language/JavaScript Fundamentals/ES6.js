// objects
// computed properties
// // value came in run time inside an object  
// let productKey = 'name';
// let productKeyValue = 'Mobile';
// const product = {
//     [productKey]: productKeyValue
// };
// console.log(product);

// let num = [1,2,[3,[4]]];
// console.log(num);
// let newNum = [...num];
// console.log(newNum.length === num.length);

// let num = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// };
// let newobj = { ...num };
// newobj.b.d = 1000;
// console.log(newobj);
// console.log(num);

// rest 
let sum = (...item) => item.reduce((acc,value) => acc + value);
console.log(sum(1,2));
console.log(sum(1,2,34,45,567,678,7));