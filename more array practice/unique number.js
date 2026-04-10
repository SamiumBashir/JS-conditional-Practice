let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];

for (let number of numbers){
    if (!uniqueNumbers.includes(number)){
        uniqueNumbers.push(number)
    }
}
console.log(uniqueNumbers);