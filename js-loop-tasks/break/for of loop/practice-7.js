let smallFruits = ["apple", "mango", "orange"];
let bigFruit = [];

for (let smallFruit of smallFruits){
    let fruit = smallFruit.toUpperCase();
    bigFruit.push(fruit);
    console.log (bigFruit)
}