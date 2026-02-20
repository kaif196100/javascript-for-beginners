
// Setters

var person = {
    name: "vishwajeet",
    age: 25,

    set setname(n) {
        this.name = n.toUpperCase();
    }
};

person.setname = "ajit";

console.log(person);
  

// getters

var person = {
    name: "vishwajeet",
    age: 25,

    get getname () {
        return this.name.toUpperCase();
    }
};

 console.log(person.getname);