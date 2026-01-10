import os from 'os';

// userInfo()
console.log(os.userInfo());
console.log(os.userInfo().username);


//totalmem()
console.log(os.totalmem());

//freemem()
console.log(os.freemem());

//cpus()
console.log(os.cpus());

// os.cpus()
// - Gives basic info about CPU cores
// - Returns an array (one object per core)
// - Mostly used to know how many cores are available
