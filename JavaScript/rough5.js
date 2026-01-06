function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4));

function infiniteSum(a){
    return function(b){
        if(b === undefined){
            return a;
        }
        return infiniteSum(a + b);
    }
}

console.log(infiniteSum(2)(3)(10)()); // 15


const addArrow = a => b => c => a + b + c;
console.log(addArrow(5)(10)(15)); // 30