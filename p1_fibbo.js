const prompt = require("prompt-sync")();
const num= parseInt(prompt("please enter number of terms"));
let n1=0, n2=1, nextterm;
for(i=1;i<=num;i++){
    console.log(n1);
    nextterm=n1+n2
    n1=n2;
    n2=nextterm
}


