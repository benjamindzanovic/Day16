class Person {
    constructor(name, email, age) {
           this.name = name;
           this.email = email;
           this.age = age;
    }
        getPerson() {
     
     var personInfo;
     return personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
      
    }
}
let person = new Person("Benjo", "dzanovicbenjamin@gmail.com", "23");
console.log(person.getPerson());

module.exports = Person;