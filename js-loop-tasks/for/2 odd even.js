/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


const oddNumber = [];

for (let i = 61; i < 100; i++) {
    if (i % 2 !== 0 ){
        oddNumber.push(i)
    }
}
console.log("Odd Number List", oddNumber);

const evenNumber =[];

for(let i = 78 ; i <= 98 ; i++) {
    if( i % 2 ===0){
        evenNumber.push(i);
    }
}
console.log("Even Number List", evenNumber);