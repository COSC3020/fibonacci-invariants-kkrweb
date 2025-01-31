// Kane Kriz
// UWYO COSC 3020
// 30 January 2025
//
//

//fibbonaci function
function fib(n)
{
if(n < 0)
    {
    return [];
    } 
var arr;
    if(n === 0) 
    {
        return arr;
    }
var index = 1; 
    while(index < n)
    {
        if(index < 2)
        {
        arr.push(1);
        }
        else
        {
        arr.push(arr[index-1] + arr[index-2]);
        }
index++;
}
return arr;
}
