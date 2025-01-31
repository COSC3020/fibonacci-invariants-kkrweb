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
    var arr = [];
    var index;
    
    arr[0] = 0;
    arr[1] = 1;
    index = 2;  
    
    while(index < n)
    {
        arr.push(arr[index-1] + arr[index-2]);
        index++;
    }
    return arr;
}
