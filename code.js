// Kane Kriz
// UWYO COSC 3020
// 30 January 2025
//
//


//fibbonaci function
function fib(n)
{
    var currentIteration = 0;
    var fibArr = [];

    function recHelper()
    {
        if(currentIteration > n) //it has reached the desired index
        {
            return fibArr;
        }
        if(currentIteration === 0) 
        {
            fibArr.push(0);
        } 
        else if(currentIteration === 1) 
        {
            fibArr.push(1);
        } 
        else 
        {
            fibArr.push(fibArr[currentIteration - 1] + fibArr[currentIteration - 2]);
        }
        currentIteration++;
        return recHelper();
    }
    return recHelper();
}
