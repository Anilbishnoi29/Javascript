// scenario
// 1. Register
// 2. send welcome email
// 3. Login
// 4. get user data
// 5. display user data
// this code is asynchronous
function register(callback) {
    setTimeout(() => {
        console.log("Register end");
        callback();
    },1000);
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log("email end");
        callback();
    },5000);
}
function login(callback) {
    setTimeout(() => {
        console.log("logged In");
        callback();
    },1000);
}
function getUserData(callback) {
    setTimeout(() => {
        console.log("Got user data");
        callback();
    },1000);
}
function displayUserData() {
    setTimeout(() => {
        console.log("Displayed user data");
    },1000);
}
function otherApplicationWork() {
    console.log("Other application work");
}

// callback hell
register(() => {
    sendEmail(() => {
        login(() => {
            getUserData(() => {
                displayUserData();
            });
        });
    });
});

otherApplicationWork();