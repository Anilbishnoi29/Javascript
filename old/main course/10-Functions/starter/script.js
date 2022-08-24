'use strict';
// const bookingList = [];

// function createBooking(flightNumber,numOfPassengers = 1,price = 199 * numOfPassengers) {
//     const booking = {
//         flightNumber,
//         numOfPassengers,
//         price
//     };
//     bookingList.push(booking);
//     console.log(bookingList);
// }
// createBooking("LH123");
// createBooking("LH123",2);
// createBooking("LH123",2,450);
// createBooking("LH123",20);


const flight = "LH123";
const anil = {
    name: "Anil Bishnoi",
    passport: 2356930382
};

const checkIn = (flightNum,passenger) => {
    flightNum = "LH890";
    passenger.name = "Mr. " + passenger.name;
    (passenger.passport === 2356930382) ? console.log("Checked In") : console.log("Wrong passport!");
};



// console.log(anil);
console.log("Before passport change");
checkIn(flight,anil);
console.log(flight);
console.log(anil);
console.log("");
// after change passport Number

const newPassportNumber = person => person.passport = Math.trunc(Math.random() * 1000000000);

// console.log(typeof newPassportNumber);
console.log("After passport change");
newPassportNumber(anil);
checkIn(flight,anil);
console.log(flight);
console.log(anil);