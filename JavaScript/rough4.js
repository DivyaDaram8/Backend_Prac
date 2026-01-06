
let section = {
    subject: "Math",
    teacher: "Mr. Smith",
    room: 101
};

console.log(section); 

console.log(section.subject);

for(let key in section){
    console.log(key + " : " + section[key]);
}

section.room = 102;
section.strength = 30;
console.log(section);

delete section.room;
console.log(section);

let student = {
    fname : "Alice",
    lname : "Johnson",
    greet(){
        console.log(this.fname + " " + this.lname);
    }
}

student.greet();

console.log("keys: ", Object.keys(section));
console.log("Values: ", Object.values(section));
console.log("Entries: ", Object.entries(section));

let {subject: subjectName} = section;
console.log("Subject:", subjectName);

let stud = {
    id : 101,
    info : {
        grade : "A",
        marks : 95
    }
}

console.log("Grade: ", stud.info.grade);
console.log("Marks: ", stud.info.marks);


console.log("Manager Name:", stud.manager?.name);
// gives undefined instead of error


let objA ={
    x : 10
}

let objB = objA;
objB.x = 20;
console.log("objA:", objA);
console.log("objB:", objB);
console.log(objA === objB); // true
console.log(objA.hasOwnProperty('x')); // true


let deepCopy = JSON.parse(JSON.stringify(objA)); // deep copy example