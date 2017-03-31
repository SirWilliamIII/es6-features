/**
 * Created by willcarpenter on 3/31/17.
 */

class User {
    constructor(name) {
        //this.name = typeof name === 'string' ? User.capitalizeWord(name) : 'Anonymous';
        if(typeof name === 'string'){
            this.name = name;
        } else {
            this.name = 'Anonymous';
        }
    }

    set name(val) {
        this._name = User.capitalizeWord(val);
    }

    get name() {
        return this._name;
    }

    static capitalizeWord(word) {
        const capital = word[0].toUpperCase() + word.slice(1);
        return capital;
    }

    printGreeting() {
        console.log(`Hello! My name is ${this.name}`)
    }
}

class Member extends User {
    constructor(name, job = 'unemployed') {
        super(name);
        this.job = job
    }
    printGreeting() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.job}`);
    }
}

var member= new Member('j', 'web dev');
member.printGreeting();
