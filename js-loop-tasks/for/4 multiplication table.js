/***

Generate a multiplication table for number 9

 */


/*programming hero*/

let multiplicationTable = []
let number = 10;

for (let multiplier = 1; multiplier <= 10; multiplier++ ){
    result = number * multiplier;
    let entry = number + "x" + multiplier + "=" + result;
    multiplicationTable.push(entry);
}

console.log ("Multiplication-Table",multiplicationTable);
