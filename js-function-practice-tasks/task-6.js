
let max = 0;

// function find_max(numbers){

//     for (let number of numbers){
//         if(number > max){
//             return max;
//         }
//     }
// }

function find_max (numbers){
    let max = 0;

    for( let i = 0 ; i < numbers.length ; i++ ){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return max
}

let numbers = [2, 19, 20, 74,63, 32];
let result = find_max(numbers);
console.log (result)