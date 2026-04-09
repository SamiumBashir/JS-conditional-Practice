let prices = [100, 250, 150, 400, 50];
totalBill = 0;

for ( let i = 0; i < prices.length; i++){
    if(prices[i] > 200){
        let discountPrice = prices[i] * 0.9;
        totalBill += discountPrice;
    }
    else{
        totalBill += prices[i];
    }
}
console.log(totalBill)