
const simpleInterest = (principle,rateOfInterest,timeInYear) => {
    return (principle * rateOfInterest * timeInYear) / 100 ;
}
// 100 rs, 5% interest rate for 1 year
console.log(simpleInterest(1000, 5 , 1));