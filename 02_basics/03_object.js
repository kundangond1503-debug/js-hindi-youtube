// singlton object litral se nhi bnta hai bs constructor se bnta hai
//object.create

//object literals

const mySym = Symbol("mykey1")

const jsUser = {
    name: "Kundan",
    "full name": "Kundan kumar gond",
    [mySym]: "mykey1",
    age: 18,
    location : "Kushinagar",
    email: "kundangond@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

jsUser.email = "kundan@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "kundan@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greetingTwo())
