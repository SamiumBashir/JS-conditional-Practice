function count_zero(binaryString){
    let count = 0;

    for (let i = 0 ; i < binaryString.length; i++){
        if(binaryString[i] === '0'){
            count++
        }
    }
    return count;
}

let myBinaryString = '1010010';
let result = count_zero(myBinaryString);
console.log(result)