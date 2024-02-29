async function awaitCall()
{
    let data = await fetch("https://121clicks.com/wp-content/uploads/2022/01/most_beautiful_places_nature_01.jpg");
    return data;
}

awaitCall()
    .then((info) => console.log(info));