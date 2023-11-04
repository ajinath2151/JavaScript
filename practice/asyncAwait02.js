//async await

function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data fetch successfully....");
        }, 3000);
    });
}
async function fetchDataAsync() {
    console.log("Fetching data..");
    let data = await fetchData();
}
fetchDataAsync();