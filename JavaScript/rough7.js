// console.log("First");
// setTimeout(() =>{
//     console.log("Second");
// }, 1000);
// console.log("Third");




// function fetchData(cb){
//     setTimeout(() =>{
//         cb("Data fetched");
//     }, 1000);
// }

// fetchData(function (data) {
//     console.log(data);
// });



// setTimeout(() => {
//     console.log("s1");
//     setTimeout(() =>{
//         console.log("s2");
//     }, 1000);
// }, 1000); 


// const prom = new Promise((resolve, reject) =>{
//     let bool = true;
//     if(bool){
//         resolve("Success");
//     }else{
//         reject("Failure");
//     }
// })

// prom
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error =>{
//         console.log(error);
//     })


function step1(){
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(success){
                resolve("Step 1 completed");
            }else{
                reject("Step 1 failed");
            }
        }, 1000);
    })
}

function step2(){
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(success){
                resolve("Step 2 completed");
            }else{
                reject("Step 2 failed");
            }
        }, 1000);
    })
}


function step3(){
    return Promise.resolve("Step 3 completed");
}

step1()
    .then(result => {
        console.log(result);
        return step2();
    })
    .then(res => {
        console.log(res);
        return step3();
    })
    .then(res => {
        console.log(res);
    })




async function varx(){
    return Promise.resolve(10); // Promise because of async function
    return 5;  // Also works, JS wraps it in a resolved Promise
}

async function add(){
    try{
        const a = await varx();
        console.log(a + 4);
    }catch(error){
        console.log(error);
    }
}
add();