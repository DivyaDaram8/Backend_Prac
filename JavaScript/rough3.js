let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6); // adds 6 at the end
console.log(numbers);

numbers.unshift(0); // adds 0 at the beginning
console.log(numbers);

numbers.pop(); //removes last Element
console.log(numbers);

numbers.shift(); // removes first element
console.log(numbers);

numbers.forEach(val => {
    console.log("Value is: " + val);
})

console.log(Array.isArray(numbers));

for(let val of numbers){
    console.log("Value from for of: " + val);
}

let len = numbers.length;
while(len--){
    console.log(numbers[len]);
}


let values = [44, 12, 5, 78, 23, 9];
values.sort((a, b) => a - b);
console.log("Sorted values:", values);

values.sort((a, b) => b - a);
console.log("Sorted values descending:", values);
