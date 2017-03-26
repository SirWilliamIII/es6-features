class Person {
    constructor(name) {
        this.name = typeof name === 'string' ? name : 'Anonymous';
    }
    printGreeting() {
        console.log(`Hello I am ${this.name}`);
    }
    static capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

var person1 = new Person('peterson');
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalize('donny'));