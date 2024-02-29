async function parallelCalls(arr)
{
    let tab  = [];

    for(let i of arr)
    {
        tab.push(fetch(i));
    }

    await Promise.all(tab)
        .then((data) => console.log(data));
}
