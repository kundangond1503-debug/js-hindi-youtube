const name = "kundan"
const repocount = 40
// console.log(name + repocount + "value")

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('kundan-hc-ku'); 

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('n'));

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherstring = gamename.slice(-8,4);
console.log(anotherstring);

const newString = "    kundan"
console.log(newString);
console.log(newString.trim());

const url = "http://kundan.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('kundan'));
console.log(gamename.split('-'));