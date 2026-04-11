
function count_names_length(names){
    let lengths = [];
    for( let i = 0 ; i < names.length; i++){
        let nameSize = names[i].length;
        lengths.push(nameSize)
    }

    return lengths;
}

let myNames = ['Hasan', 'Samium', 'Dhaka'];
let result = count_names_length(myNames)
console.log(result)