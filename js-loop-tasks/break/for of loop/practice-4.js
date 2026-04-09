let products = [120, 550, 400, 900, 1000, 250];
let count = 0;

for (let product of products){
    if (product > 500){
        count ++
    }
}

console.log(count);