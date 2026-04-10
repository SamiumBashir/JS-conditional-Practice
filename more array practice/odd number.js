let numbers = [1, 2, 3, 4, 5, 6, 7];
let total = 0;

for (let number of numbers){
    if (number % 2 !==0 ){
        total += number;
        console.log(number); 
    }
}

console.log("Total of odd Numbers",total);