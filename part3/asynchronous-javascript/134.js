// // Promise
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];



// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// // produce 



// // consume 
// // how to consume 

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })


// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")
// setInterval(() => {
//     console.log((Math.floor(Math.random() * 9)));
// });

function onSuccess(number1,number2) {
    console.log(number1 + number2);
}
function onFailure() {
    console.log(`Wrong data Type`);
}

function addNumberAndPrint(number1,number2,onSuccess,onFailure) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        onSuccess(number1,number2);
    } else {
        console;
        onFailure();
    }
}
addNumberAndPrint(2,90090,onSuccess,onFailure);