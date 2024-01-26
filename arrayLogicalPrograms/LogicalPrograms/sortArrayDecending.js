
// sort array in ascending order

let arr = [4,3,5,1,2,102,0,9,111,];
let temp=arr;
for(let i = 1; i < arr.length; i++) {
    for(let j =  0; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
           temp = arr[j]; 
           arr[j] = arr[i];
           arr[i] = temp;
        }
    }
}
console.log(arr);
