class Person {
    static serialNumber = 34;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    intoduce() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

    greet() { 
        console.log("Hi, How do you do?");
    }

    static help() {
        console.log("I am Person class, How can i help you?");
    }
} 

const person1 = new Person("Muza", 25);
const person2 = new Person("Martin", 33);
const person3 = new Person("Micheal", 11);

person1.greet();
person1.intoduce();
person2.intoduce();