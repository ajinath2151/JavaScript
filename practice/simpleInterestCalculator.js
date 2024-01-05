
const simpleInterest = (p,r,t) => {
    return (p * r * t) / 100 ;
}
// 100 rs, 5% interest rate for 1 year
console.log(simpleInterest(1000, 5 , 1));