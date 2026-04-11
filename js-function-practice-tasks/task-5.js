let odd_evenCount = [];

function odd_even(numbers){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            odd_evenCount.push('Even')
        }
        else{
            odd_evenCount.push('Odd')
        }
    }
    return odd_evenCount;
}

let numbers = [4, 5, 8]
let result = odd_even(numbers)
console.log (result)