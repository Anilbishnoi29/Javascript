// Define a variable in the global scope:accessible globally to all code within the script.
// 'use strick';
// const userName = 'JavaScript';

// // Define nested functions:
// function profile() {
//     function sayName() {
//         function writeName() {
//             console.log(userName);
//         }
//         writeName();
//     }
//     sayName();
// }
// function profile() {
//     console.log("asdfsad");
// }
// profile();
var a = "global";
function x() {
    console.log(a);
    var a = "local of x";
    console.log(a);
}
x();