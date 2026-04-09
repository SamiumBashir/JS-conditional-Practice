let students = ["Samiun", "Karim", "Rahul", "Jabbar"];
let index = 0;

for (let student of students){

    if (student === "Rahul"){
        console.log(index)
        break;
    }
    index++;
}