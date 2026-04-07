/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 72;
const heightInFeet = 5.6;

const heightInMeter = heightInFeet * 0.3048;

const bmi = weight / (heightInMeter * heightInMeter);

console.log ("Your BMI is " +bmi.toFixed(2));

if (bmi < 18.5) {
    console.log ("you are underweight");
}

else if (bmi >= 18.5 && bmi <= 24.9){
    console.log ("you are normal");
}

else if (bmi >= 25 && bmi <= 29.9) {
    console.log ("you are overweight");
}

else {
    console.log ("you are obese");
}