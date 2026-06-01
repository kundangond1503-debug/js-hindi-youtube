let myDtes = new Date();
// console.log(myDtes.toString());
// console.log(myDtes.toDateString());
// console.log(myDtes.toLocaleString());
// console.log(typeof myDtes);

// let myCreatedDate = new Date(2026, 0, 2)
// let myCreatedDate = new Date(2026, 0, 2, 5, 3)
// let myCreatedDate = new Date("2026-01-14")
let myCreatedDate = new Date("01-14-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long"
})