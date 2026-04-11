
function printNumbs(n){
    let finalResult = [];
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 ===0 ) {
            finalResult.push(n[i])
        }
    }
    return finalResult;
}

let numbers= [2, 4, 6, 8, 10];
let printEvens = printNumbs(numbers);
console.log(printEvens)