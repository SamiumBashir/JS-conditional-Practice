function make_avg(number, size){
    let sum = 0;
    for (i = 0 ; i < size; i++){
        sum += number[i];
    }

    let avarage = sum / size;
    return avarage;

}

const myNumber = [2, 10, 20, 4, 40]
const numerSize = myNumber.length
const result = make_avg(myNumber, numerSize)
console.log(result);