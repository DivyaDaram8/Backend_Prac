function sum(a, b){
    return a + b;
}

let add = sum;
console.log(add(4, 5));

function greet(){
    console.log("hi");
}

let text = greet;
text();



function exec(fn){
    fn();
}

function greets(){
    console.log("Hiiii");
}

exec(greets);



function calculator(factor){
    return function(number){
        return number * factor;
    }
}

let x4 = calculator(4);
console.log(x4(5));

let x5 = calculator(5);
console.log(x5(5));



let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num =>{
    return num * num;
});

// or simply
// let squares = numbers.map(num => num * num);

console.log(squares);


let evenNums = numbers.filter(num =>{
    return (num & 1) === 0;
})
console.log(evenNums);


let sumOfNums = numbers.reduce((acc, curr) => {
    if((curr & 1) === 1){
        return acc + curr;
    }
    return acc;
}, 0)
console.log(sumOfNums);

let students = [
    {fname: "John", age: 16},
    {fname: "Jane", age: 20},
    {fname: "Bob", age: 22}
]

let names = students.filter(stu => {
    if(stu.age >= 18){
        return stu.fname;
    }
});
console.log(names);

names = names.map(stu => stu.fname);
console.log(names);


let voters = students
    .filter(stu => stu.age >= 18)
    .map(stu => stu.fname);

console.log(voters);


let sumOfOddIndex = numbers.reduce((acc, curr, index) => {
    if (index % 2 === 1) {
        return acc + curr;
    }
    return acc;
}, 0);

console.log(sumOfOddIndex);
