// don't need to import because

//argv
console.log(process.argv);
// console.log(process.argv)
console.log(process.argv[1])

//process.env
console.log(process.env);
console.log(process.env.USERNAME)

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title)

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime())

process.on('exit', (code) => {
    console.log("About to exit the code: ", code);
})

//exit()
process.exit(0);

console.log("doesn't print anything after exit");

