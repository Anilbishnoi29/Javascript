// // Promise
// console.log("script start");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// const bucket = ['coffee','chips','vegetables','salt','rice'];

// // create promise
// const friedRice = new Promise((resolve,reject) => {
//     if (bucket.includes("rice") && bucket.includes("vegetables")) {
//         resolve("Resolved -> Done");
//     } else {
//         reject("Rejected -> Error");
//     }
// });

// // friedRice.then((resolve) => {
// //     console.log(resolve);
// // },(reject) => { console.log(reject); });

// friedRice.then(resolve => console.log(resolve)).catch(reject => console.log(reject));

// const obj = {
//     friedRice: new Promise((resolve,reject) => {
//         if (bucket.includes("rice") && bucket.includes("vegetables")) {
//             resolve("Resolved -> Done");
//         } else {
//             reject("Rejected -> Error");
//         }
//     }),
// };
// obj.friedRice.then(value => console.log(value)).catch(value => console.log(value));

// // execute
function changeText(element,text,color,time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color;
                element.textContent = text;
                resolve();
            } else {
                reject();
            }
        },time);
    });
}
changeText(heading1,'one','red',1000).then(() => {
    return changeText(heading2,'two','pink',1000);
}).then(() => {
    return changeText(heading3,'three','yellow',1000);
}).then(() => {
    return changeText(heading4,'four','green',2000);
}).then(() => {
    return changeText(heading5,'five','brown',1000);
});;