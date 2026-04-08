

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

while (oddNumber < 131) {
    oddNumberList.push(oddNumber);
    oddNumber += 2;
}
console.log("Odd Numbers",oddNumberList);


let evenNumberList = [];
let evenNumber = 206;

while (evenNumber < 311) {
    evenNumberList.push(evenNumber);
    evenNumber += 2;
}
console.log("Even Numbers",evenNumberList);
console.log("count of even number", (evenNumberList.length));