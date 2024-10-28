// argv 
console.log(process.argv);
// console.log(process.argv[2]);

// process.env 
console.log(process.env.COMPUTERNAME);

// pid 
console.log(process.pid);

// cwd 
console.log(process.cwd);

// title 
console.log(process.title);

// memoryUsage
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// exit()

process.on('exit', (code) => {
    console.log(`About exit code: ${code}`)
})

process.exit(3);