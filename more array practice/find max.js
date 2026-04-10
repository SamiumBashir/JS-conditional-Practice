let numbers = [10, 55, 82, 32, 91, 4, 23];
let max = 0;

for (i = 0 ; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}

console.log("Max Number", max)