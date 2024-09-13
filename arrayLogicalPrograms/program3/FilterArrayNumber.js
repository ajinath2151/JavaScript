const arr = [1,2,4,3,4,5,3,2,5];
let result = arr.filter((index, value)=>{
    if(arr.indexOf(index)!= value)  {
        console.log(index);
        
    }
})