// print first letter of each word form string

function getFirstLetter(str) {
    
    let firstLetter = str
    .split(' ')    
    .map(word => word.charAt(0))
    .join('');
    return firstLetter;    
}
console.log(getFirstLetter("india is my country"));
console.log(getFirstLetter("sinhgad institute of management"));