const products = [
    {name : 'sampoo', price : 200, quantity : 1},
    {name : 'chiruni', price : 100, quantity : 1},
    {name : 'shirt', price : 700, quantity : 3},
    {name : 'pant', price : 1200, quantity : 2}
]

function cartTotal (products){
    let totalSumOfCart = 0;
    for (let product of products){
        let rate = product.price * product.quantity;
        totalSumOfCart += rate
    }

    return totalSumOfCart
}

const total = cartTotal(products);
console.log('I spend on my shopping:',total)
