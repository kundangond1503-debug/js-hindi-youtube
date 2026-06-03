// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Kundan",
            lastname: "Gond"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",2:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3);

const obj5 = {...obj1,...obj2}
console.log(obj5);

const users =[ 
    { id: 1,
      email: "kg@gmail.com"
    },
     { id: 1,
      email: "kg@gmail.com"
    },
     { id: 1,
      email: "kg@gmail.com"
    }

]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnproperty('isloggedIn'))