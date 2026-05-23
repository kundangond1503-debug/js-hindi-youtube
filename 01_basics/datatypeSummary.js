// primitive

// 7 types : string, Number, Boolean, Null, symbol=>kisi chij ko unique bnane ke liye use hota hai, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
const bigNumber = 3463724729688542729n

// reference (Non primitive)

// array, objects, function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Kundan",
    age : 21,
}

const myFunction = function(){
    console.log("Hello world"); 
}

// Stack (Primitive ), Heap (non primitive)

let myYoutubeName = "kundan.com"
let anothername = myYoutubeName
anothername = "chaiaurcode"
console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "kundan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

