
// let obj = {
//     name: 'orange',
// };

// obj = 'red';


// console.log(obj);


// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

// var person = {
//     first: "Post",
//     last: "Card"
// };
// person = "Bunny";


// console.log('1');
// setTimeout(() => {
//     console.log('2');
// });
// console.log('3');

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        // console.log(item);
        // setTimeout(removeItemsFromList,1);
    }
};

// removeItemsFromList();