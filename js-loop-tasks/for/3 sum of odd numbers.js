

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/


let oddNumberList = []; //declaration 
let totalSum = 0; // declaration 

for(let oddNumber = 91 ; oddNumber <= 129; oddNumber++){
    if (oddNumber % 2 === 1){
        oddNumberList.push(oddNumber);
        totalSum += oddNumber;
    }
}

console.log("Total Sum", totalSum);
console.log("Odd Number", oddNumberList);


let evenNumberList = [];
let totalOfEvenNumber = 0;

for (evenNumber = 51; evenNumber <= 85; evenNumber++){
    if (evenNumber % 2 === 0){
        evenNumberList.push(evenNumber);
        totalOfEvenNumber += evenNumber;
    }
}

console.log("List", evenNumberList);
console.log ("Even Numbers Sum", totalOfEvenNumber);