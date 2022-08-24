// reduce 
// const numbers = [1,2,3,4,5,10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    { productId: 1,productName: "mobile",price: 12000 },
    { productId: 2,productName: "laptop",price: 22000 },
    { productId: 3,productName: "tv",price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice,currentProduct) => {
    return totalPrice + currentProduct.price;
},0);

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000

// const users = [
//     {
//         first_name: 'Mike',
//         last_name: 'Sheridan'
//     },
//     {
//         first_name: 'Tim',
//         last_name: 'Lee'
//     },
//     {
//         first_name: 'John',
//         last_name: 'Carte'
//     }
// ];

// const usersList = users.map(user => user.first_name + ' ' + user.last_name);

// console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]
// const employees = [
//     { name: "David Carlson",age: 30 },
//     { name: "John Cena",age: 34 },
//     { name: "Mike Sheridan",age: 25 },
//     { name: "John Carte",age: 50 }
// ];
// const employee = employees.find(employee => employee.name.indexOf('John Carte') > -1);
// console.log(employee); // { name: "John Cena", age: 34 }


// let numbers = [10,30,20,50];

// allPositive = numbers.every(number => number > 0);
// console.log(allPositive); // true

// const users = [{
//     'id': 1,
//     'name': 'Anil'
// }];
// for (let user of users) {
//     console.log(user);
// }
// console.log(this);
const person = {
    id: 1,
    personName: "Anil",
    about: {
        about: () => {
            console.log(this);
        }
    }
};
person.about.about();