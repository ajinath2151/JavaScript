
let arr = [1,2,4,3,6,8,9];

let sign = "@";
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
        let res = arr[i];
        arr[i] = arr[i] + ` ${sign}`;
        
    }
}
console.log(arr);