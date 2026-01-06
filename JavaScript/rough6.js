let obj2 = new Object();
obj2.a = 10;
obj2.b = 20;

console.log(obj2);

function Student(name, age){
    this.name = name;
    this.age = age;
}

const s1 = new Student("Ziya", 21);
const s2 = new Student("Alex", 25);
console.log(s1, s2);


class Person{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    getResult(){
        return this.marks >= 40 ? "Pass" : "Fail";
    }
}

const p1 = new Person("Ziya", 90);
console.log(p1.getResult());


