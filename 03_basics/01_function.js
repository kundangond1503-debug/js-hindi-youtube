function sayMyName(){
    console.log("K")
    console.log("U")
    console.log("N")
    console.log("D")
    console.log("A")
    console.log("N")
}

sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}

const result = addTwoNumber(1,5);
console.log("result :",result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Kundan"));

function calculateVartPrice(val1,val2,...num){
    return num;
}

console.log(calculateVartPrice(200,400,500,2000))


const user = {
    username: "Kundan",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})


const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));