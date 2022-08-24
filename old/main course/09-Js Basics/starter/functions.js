'use strict';

// parameter vs argument
function fun(parameter) { console.log(parameter); }
fun("Argument");

//================ Function Statement ================
function functionStatement() {
    console.log("Function Statement");
}
functionStatement();

//================ Function Expression ================
const functionExpression = function () {
    console.log('Function Expression');
};
functionExpression();

//================ Anonymous Function ================
//{ function without any name,used as function as a value; }
// function () { } 
// var b = function(){ }

//================ Named Function Expression ================
const abc = function xyz() {
    console.log('Named Function Expression');
};
abc();
// xyz(); //xyz is not defined (xyz is inside inner scope not in outer scope)


// ================ First class function ================
// The ability to use functions as a value and can be passed as arguments and receive as a parameter and return as a function is known as first class function or first class citizens

function xyz(fun) {
    return fun;
}

console.log(xyz(xyz));

// ================ Arrow function ================


// ================ Callback Functions ================
// passed a function in argument in another function and it called sometime in function, callback is used for asynchronous task in javascript ex. setTimeout(callback,time )

// setTimeout(() => {
//     console.log("setTimeout");
// },2000);

function b(x) { x(); }
b(function () { console.log("it's a callback function"); }); // it's a callback function inside( )


