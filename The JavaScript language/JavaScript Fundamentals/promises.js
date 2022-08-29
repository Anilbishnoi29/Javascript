// scenario
// 1. Register
// 2. send welcome email
// 3. Login
// 4. get user data
// 5. display user data
// this code is asynchronous
function register() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
            console.log("Register end");
        },1000);
    });
}
function sendEmail() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("email end");
            resolve();
        },5000);
    });
}
function login() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            return reject("Error while login");
            console.log("logged In");
            resolve();
        },1000);
    });
}
function getUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Got user data");
            resolve();
        });
    });
}
function displayUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Displayed user data");
            resolve();
        },1000);
    });
}
function otherApplicationWork() {
    console.log("Other application work");
}

// callback hell
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData();
//             });
//         });
//     });
// });

// user promise then and catch
// register().then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => console.log(err));
// otherApplicationWork();

// async await
async function auth() {
    await register();
    await sendEmail();
    await login().catch(err => console.log(err));
    await getUserData();
    await displayUserData();
}
auth();