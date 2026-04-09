let sentence = "I am learning JavaScript and it is amazing";
count = 0;

for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'a'){
        count++
    }
}
console.log(count)