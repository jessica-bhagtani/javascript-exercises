const reverseString = function(str) {
    let x="";
    for(const ch of str)
    {
        x=ch+x;
    }
    return x;
};

// Do not edit below this line
module.exports = reverseString;
