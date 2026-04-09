let numbers = [5, 12, 19, 22, 35, 48, 51];

let even = [];
let odd = [];

for( let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 ===0) {
        even.push(numbers[i])
    }

    else{
        odd.push(numbers[i])
    }
}
console.log(odd);