var os= require("os");
console.log(os.endianness());
console.log("arch:"+os.arch());
console.log("free memory:"+os.freemem());
console.log("hostname"+os.hostname());

// timer module.

const interval =setInterval(()=>{
    console.log("hello")
},500)
const timeout =setTimeout(()=>{
    console.log('hello has been printed 10 times'),
    clearInterval(interval)
},5500)

