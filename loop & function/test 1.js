
function printNumbs(numbs){
    let finalResult = [];
    for(i = 0; i < numbs.length; i++){
        if(numbs[i] % 2 !==0){
            finalResult.push(numbs[i])
        }
    }
    return finalResult;
}

const numbers = [2, 10, 17, 25, 98,31]

const result = printNumbs(numbers);
console.log (result);