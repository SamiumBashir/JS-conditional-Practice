

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let oddNumberList = [];
let oddNumber = 81;
let sum = 0;

while (oddNumber <= 131) {
    if(oddNumber % 2 ===1){
        oddNumberList.push(oddNumber);
        sum += oddNumber
    }
    oddNumber++;
}
console.log("list", oddNumberList);
console.log("Odd Numbers",sum);