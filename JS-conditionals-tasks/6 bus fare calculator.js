/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 9;
const isStudent =true;
const ticketFare = 800;

if(age < 10){
    console.log ("Free");
}
else if ( isStudent == true){
    studentFare = ticketFare / 2;
    console.log("Student Ticket Fare:" ,studentFare);
}
else if (age >=60) {
    discountFare = ticketFare * 15/100;
    seniorCitizenFare = ticketFare - discountFare;
    console.log ("Senior Citizen Fare:", seniorCitizenFare);
}
else{
    console.log ("Regular Ticket Fare", ticketFare)
}