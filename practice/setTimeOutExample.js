
//print hello and world in two seconds gap using settimeout function
const a = async (text)  =>  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    })
}
// iife funciton
(
    async ()=>  {
        let text = await a("hello");
        console.log(text);
        text = await a("world");
        console.log(text);
    }
)()