'use strict';
//default parameter 
const bookings=[]
const createBooking =function (flightNum,numPassengers=1,price=199*numPassengers){
const booking={
    flightNum,
    numPassengers,
    price,
}
console.log(booking);
bookings.push(booking);
}

createBooking('DHAKA450',2)
createBooking('DHAKA450',5,1300)
createBooking('DHAKA450',undefined,100)

//How Passing argument Works value vs Reference

const flight ='DHAKA24'
const Konok={
    name: "Shahariar Rahman",
    passport: 2547845232,
}

const addMd=function(flight,passenger){
    flight='KUSHTIA54';
    passenger.name='Md.'+passenger.name;
}
console.log(flight);//will not change bcz it primitive value
console.log(Konok);// change because it is reference

// function returning function
/* const greet =function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greaterHey=greet('Hey');
greaterHey('Konok');
greet('Hello')('Binoee');
*/
//frf with arrow
const greet =(greeting)=>(name)=>console.log(`${greeting} ${name}`)
const greaterHey=greet('Hey');
greaterHey('Konok');
greet('Hello')('Binoee');