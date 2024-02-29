async function awaitCall()
{
    try
    {
        let data = await fetch("https://121clicks.com/wp-content/uploads/2022/01/most_beautiful_places_nature_01.jpg");
        return data;
    }
    catch(error)
    {
        console.log("L'erreur suivante a eu lieu: "+ String(error));
        throw error;
    }
}



async function chainedAsyncFunctions()
{
    await new Promise(() => setTimeout(()=> console.log("premier message"), 1000));

    await new Promise(() => setTimeout(()=> console.log("deuxième message"), 1000));

    await new Promise(() => setTimeout(()=> console.log("troisième message"), 1000));
}
