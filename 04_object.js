// object

let person = {
    firstName: "Raj",
    lastName: "Kumer"
};


delete person.lastName;   //delete karne ka formula

console.log(person);

// for loop
    
for(let key in person){
    console.log(key + ":" + person[key]);
}                           