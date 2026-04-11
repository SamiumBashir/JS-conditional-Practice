const products = [
    {name : 'sampoo', price : 200},
    {name : 'chiruni', price : 100},
    {name : 'shirt', price : 700},
    {name : 'pant', price : 1200}

]

function getShoppingtotal (products){
    let sum = 0;
    for (let product of products){
        sum += product.price
    }
    return sum
}

const total = getShoppingtotal(products);
console.log ('I have spend total:',total)
