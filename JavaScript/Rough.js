function msg(){
    console.log("Hello");
}

msg();


function msg(text = "Good Morning"){
    console.log(text);
}

msg();
msg("Good Afternoon");

function sum(a, b){
    return a + b;
}

let add = sum(4, 5);
console.log(add);



const multiply = function (a, b){
    return a * b;
}
console.log(multiply(4, 5));


const minus = (a, b) => {
    return a - b;
}
console.log(minus(6, 3));

const square = n => n * n;
console.log(square(2));



function discountAmount(price, discount){
    return price - (price * discount);
}

function bill(sp, discountPerct){
    let total = sp - discountAmount(sp, discountPerct);
    return total;
}

let finalAmt = bill(2000, 0.4);
console.log("Bill : ", finalAmt);


