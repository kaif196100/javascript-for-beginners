function Student (first, last, age,cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;

 }

var student1 = new Student("ajeet", "kumar", 25, 4);
var student2 = new Student("jeet", "kumar", 20, 4);
var student3 = new Student("vishwajeet", "kumar", 24, 4);

console.log(student1, student2, student3)


function Student (first, last, age,cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;

}

Student.prototype.nationality = "Indian";

Student.prototype.name = function() {
    return this.firstNmae + " " + this.lastName
}

var student1 = new Student("ajeet", "kumar", 25, 4);
var student2 = new Student("jeet", "kumar", 20, 4);


console.log(student1.name)

