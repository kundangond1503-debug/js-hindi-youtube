const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:'rubby',
    swift:"Swift by apple"
}


for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programing = ["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programing[key]);
    
}