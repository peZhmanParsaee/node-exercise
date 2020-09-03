console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
console.log(process.versions);
console.log(process.memoryUsage());
console.log(process.env);

process.env.UV_THREADPOOL_SIZE = 6;

console.log(process.env.UV_THREADPOOL_SIZE);
