const removeFromArray = function(arr,a=null,b=null,c=null,d=null) {
    let f=0;
    while(a!=null)
    {
        f=arr.indexOf(a);
        if(f!== -1)
            arr.splice(f,1);
        else
        a=null;
    }
    while(b!=null)
    {
        f=arr.indexOf(b);
        if(f!== -1)
            arr.splice(f,1);
        else
        b=null
    }
    while(c!=null)
    {
        f=arr.indexOf(c);
        if(f!== -1)
            arr.splice(f,1);
        else
        c=null;
    }
    while(d!=null)
    {
        f=arr.indexOf(d);
        if(f!== -1)
             arr.splice(f,1);
        else
            d=null;
    }
    console.log(arr[f]);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
