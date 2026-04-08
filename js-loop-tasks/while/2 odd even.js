/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let oddNumber = [];
let i = 61;
while (i < 100) {
    oddNumber.push(i);
    i+=2;
}
console.log("Odd Number List",oddNumber);

let evenNumberContainer = [];
let evenNumber = 78;

while (evenNumber < 100) {
    evenNumberContainer.push(evenNumber);
    evenNumber +=2;
}
console.log("Even Number List",evenNumberContainer);