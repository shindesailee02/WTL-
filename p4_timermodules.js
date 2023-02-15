const prompt = require("prompt-sync")();
const num = parseInt(prompt("enter number:"));
const yr = parseInt(prompt("enter yr:"));
function multiply(num){
for(i=0;i<11;i++){
    console.log(num+"*" +i+":"+num*i);
}
}
function leapyr(yr){
    if(yr%4==0){
        console.log(yr +" is a leap year");
    }else{
        console.log("not a leap yr")
    }
    
}

setTimeout(()=>{
    console.log("this has been printed on 500ms")
    console.log(leapyr(yr));
},500)
setTimeout(()=>{
    console.log("this has been printed on 5500ms")
    console.log(multiply(num));
},5500)


