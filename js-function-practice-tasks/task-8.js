function count_five(number){
    let count = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] === 5){
            count++
        }
    }
    return count;
}

let myNumbers = [5, 15 ,20, 5, 25, 65, 90]
let result = count_five(myNumbers)
console.log (result);