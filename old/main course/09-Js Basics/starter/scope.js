// this js variable leakage of global variable bcz this variable not declared with (var,let,const)
// function wired() {
//     height = 50;
//     console.log("inner ",height);
// }
// wired();
// console.log("outer ",height);


// var hello = function doodle() {
//     console.log("hey!");
// };
// hello(); // work well
// //doodle(); // Error :- doodle is not defined

// // function vs block scope

// if (true) {
//     const x = 50;
// }
// // console.log(x);

// // global variable
const api_url =
    "https://jsonplaceholder.typicode.com/users";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        // hideloader();
    }
    (function ($) {
        // $.createPerson(userNameValue,userAgeValue,userRollValue);
        const UL = document.getElementById('userList');
        UL.innerHTML = null;
        $.forEach(arr => {
            const createLi = document.createElement('li');
            createLi.textContent = `${arr.id} ${arr.name} from ${arr?.address?.city}`;
            UL.append(createLi);
        });
    })(data);
}
// Calling that async function
getapi(api_url);


const person = {
    userList: [],
    createPerson(personName,personAge,personRoll) {
        user = {
            personName,
            personAge,
            personRoll
        };
        this.userList.push(user);
        return userList;
    },
};

const userListBtn = document.getElementById('userListBtn');
// iife
userListBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const userNameValue = document.getElementById('userName').value;
    const userAgeValue = document.getElementById('userAge').value;
    const userRollValue = document.getElementById('userRoll').value;
    if (userNameValue.trim() === "" && userAgeValue.trim() === "" && userRollValue.trim() === "") {
        alert('fill data');
    } else {
        (function ($) {
            $.createPerson(userNameValue,userAgeValue,userRollValue);
            const UL = document.getElementById('userList');
            UL.innerHTML = null;
            $.userList.forEach(arr => {
                const createLi = document.createElement('li');
                createLi.textContent = `${arr.personName} is ${arr.personAge} old and a ${arr.personRoll}`;
                UL.append(createLi);
            });
        })(person);
    }
    document.getElementById('userName').value = "";
    document.getElementById('userAge').value = "";
    document.getElementById('userRoll').value = "";
});




