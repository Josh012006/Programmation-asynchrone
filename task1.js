async function iterateWithAsyncAwait (arr)
{
    let i = 0;
    const interval = setInterval(function(){
        console.log(arr[i]);
        i++;
        if(i == arr.length)
        {
            clearInterval(interval);
        }
    }, 1000);

}
