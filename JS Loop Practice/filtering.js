let numbers = [12, 33, 45, 66, 8, 11, 25, 90];
let sum = 0;

let odd = numbers.filter(function (n){
    return n % 2 !==0 ;
});
for(let i = 0; i < odd.length; i++){
    sum += odd[i];
}
console.log(odd)
console.log(sum);