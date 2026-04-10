const statement  = 'I am a hard working person'

let workArray = statement.split (" ") // দুই শব্দের মধ্যে গ্যাপ ধরে স্প্লিট করে 
let revArray = workArray.reverse()
let revStatement = revArray.join(" ")
console.log(revStatement)