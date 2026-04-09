let data = [10, 15, 20, 25, 30, 35, 40];
sum = 0;

number = data.filter(function (odds){
    return odds % 2 !== 0;
}) 
for (let i = 0; i < number.length ; i++){
    sum += number[i];
}

let avarage = sum / number.length;

console.log ("Odds Number",number)
console.log("The avarage of odds",avarage)