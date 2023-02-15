exports.type=function(a,b,c){
    if(a==b && b==c && a==c){
        return "equi";
    }
    if((a==b) || (b==c)||(c==a)){
        return "isco";
    }
    else{
        return "sca";
    }
}
