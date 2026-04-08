/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/

let multiplicationTable = [];
let number = 5;
let multiplier = 1;

while (multiplier <= 10) {
    result = multiplier * number;

    let entry= multiplier + "x" + number + "=" + result;
    
    multiplicationTable.push(entry);

    multiplier++
}

console.log(multiplicationTable)