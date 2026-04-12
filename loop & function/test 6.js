function add (num1, num2){
    let sum = num1 + num2;
    return sum;
}
function subtract (num1, num2){
    let sum = num1 - num2;
    return sum;
}
function multiply (num1, num2){
    let sum = num1 * num2;
    return sum;
}
function divide (num1, num2){
    let sum = num1 / num2;
    return sum;
}


function calculateFactorial (a, b, operation){
    if (operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if (operation === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "Error"
    }
}

let result = calculateFactorial(10, 2, 'divide');
console.log(result);