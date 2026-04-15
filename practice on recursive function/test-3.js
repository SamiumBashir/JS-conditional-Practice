function reversestring (str){
    if(str === "")
        return "";
    return reversestring (str.slice(1)) + str[0]
}

const result = reversestring("supercalifragilisticexpialidocious");
console.log(result)