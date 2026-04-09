let email = "samium@gmail.com";

console.log(email.indexOf("@"));
console.log(email.slice(0, email.indexOf("@")));
console.log(email.slice(0,6).concat("_pro"));

// -------------------------------------------------------

let sentence = "I am learning JavaScript web development.";

const hasJs = sentence.includes("JavaScript")
const hasPython = sentence.includes("Python")

console.log(hasJs);
console.log (hasPython);
