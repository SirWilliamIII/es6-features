/**
 * Created by willcarpenter on 3/26/17.
 */


var people = ['Will', 'john', 'callie', 'pete'];

people.forEach((name) => console.log(name));


//var add = (a, b) => a + b;
var add = (a, b) => { return a + b };
console.log(add(1, 2));


var person = {
    name: 'Will',
    likes: ['poker', 'blondes', 'brunettes', 'programming'],
    generateGreeter: function() {
        return () => {
            console.log(this.name);
        }
    },
    printLikes: function() {
            this.likes.forEach((like) => {
                console.log(`${this.name} likes ${like}`);
            });

    }
};

person.generateGreeter()();

person.printLikes();














