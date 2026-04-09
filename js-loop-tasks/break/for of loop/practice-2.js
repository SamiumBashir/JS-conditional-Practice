let scores = [45, 87, 32, 99, 67, 12];

let max = scores [0];

for(let score of scores){
    if (score > max){
        max = score
    }
}

console.log(max)