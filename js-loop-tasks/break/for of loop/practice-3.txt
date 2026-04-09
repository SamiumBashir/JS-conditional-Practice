let fruits = ["apple", "mango", "banana"];

for (let fruit of fruits){
    let reversedfruit = fruit.split("").reverse().join("");
    
    console.log (reversedfruit)
}