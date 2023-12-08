
// in this program form two sting merge one by one character

const charMergeFunction = (str1, str2) => {
    let rs;
    for(let i=0;i<str1.length;i++) {
       for(let j=i;j<str2.length;j=j+str2.length) {
        rs = str1[i] + str2[j]
    }
    console.log(rs);
    }
}
charMergeFunction("ajin","1234");
