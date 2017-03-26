class Person {
    constructor(name) {
        this.name = typeof name === 'string' ? name : 'Anonymous';
    }
    set name(val) {
        this._name = Person.capitalize(val);
    }
    get name() {
        return this._name;
    }
    printGreeting() {
        console.log(`Hello I am ${this.name}`);
    }
    static capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

class Employee extends Person {
    constructor(name, job = 'unemployed') {
        super(name);
        this.job = job
    }
    printGreeting() {
        console.log(`Hi, I am ${this.name} and I am a ${this.job}`);
    }
}



const person1 = new Employee('peterson', 'dev');
person1.printGreeting();


console.log(Person.capitalize('donny'));
