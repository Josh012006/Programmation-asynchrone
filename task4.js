async function concurrentRequests()
{
    let promise1 = fetch("https://travelguide.nettavisen.no/wp-content/uploads/2015/03/MoskenesLofoten-980x660.jpeg");
    let promise2 = fetch("https://hips.hearstapps.com/hmg-prod/images/gettyimages-632170503-1585159537.jpg");

    await Promise.all([promise1, promise2])
        .then((result) => console.log(result))
}
