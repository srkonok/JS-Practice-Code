'use strict'
//Function Expression
const calcAge = function (year) {
  return 2022 - year
}
console.log(calcAge(1998))

//Arrow Function
const calcAge2 = (year) => 2022 - year
console.log(calcAge2(1999))

// Callback Function
const cutPieces = (fruit) => fruit * 4

const fruitProcessor = function (apples, oranges) {
  const appleP = cutPieces(apples)
  const orangeP = cutPieces(oranges)
  const juice = `Juice with ${appleP} pieces of Apple and ${orangeP} pieces of orange`

  return juice
}

console.log(fruitProcessor(5, 7))

//Dot vs Bracket notation

const Konok = {
  fname: "Md Shahriar",
  lname: "Rahman",
  age: 24,
  calcAg: function (year) {
    return year - this.age
  },
}

console.log(
  `My name is ${Konok.fname} ${Konok["lname"]} and I born in ${Konok.calcAg(
    2022
  )}`
)

//Destructuring Array

const [p = 1, , q = 1, r = 1] = [8, 3, 5, 6] //skipped '3'
console.log(p, q, r)

//Destructuring Object
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}

const { name, mainMenu, categories} = restaurant
                                                                                                                                                                                                                                                                                                         
const {fri:{open,lose}}=restaurant.openingHours;

// Rest , rest in function 

const arr=[8,5,7,9,10]
const [x,...others]=arr;
console.log(x,others)

const addAll=function(...numbers){
  let sum =0;
  for (let i=0;i!=numbers.length;i++){
    sum+=numbers[i];
  }
  return sum;
}
console.log(addAll(...arr))

//Looping arrays with for of loop
 const menu =[...restaurant.starterMenu,...restaurant.mainMenu]

 for ( const [i,el] of menu.entries()){
  console.log(`${i+1}: ${el}`)
 }

 //Split and Join
 const capitalizeName=function(name){
   const names=name.split(' ');
   const namesUpper=[];
   for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
   }
   console.log(namesUpper.join(' '));
 }
capitalizeName('shahariar rahman konok')






//Challenge
 const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode=str=>str.slice(0,3).toUpperCase();

const funcFlight=function(flightTime){
 for (const f of flightTime.split('+')){
  const [type, from,to,time]= f.split(';')

  const output=` ${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_'," ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(45)
  console.log(output)

 }

}
console.log(funcFlight(flights))

//  const spFlight= flights.split('+');
// for( const sF of spFlight){
//  const  sf
// }