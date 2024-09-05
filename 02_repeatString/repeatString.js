const repeatString = function(str,count) {
    if(str==="")
        return "";
    if(count<0)
        return "ERROR";
    let x="";
    for(let i=0;i<count;i++)
    {
        x+=str;
    }
    return x;
};

// Do not edit below this line
module.exports = repeatString;
