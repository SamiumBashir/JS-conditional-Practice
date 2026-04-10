const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for ( let num of numbers){
    if (num % 2 === 0){
        console.log ("Even Number is", num)
    }
}

for (let i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 ===0 ){
       evenNumbers.push(numbers[i]) 
    }
}
console.log ("Even number Array",evenNumbers)