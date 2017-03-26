/**
 * Created by willcarpenter on 3/25/17.
 */

/*

var people = ['will', 'jim', 'steve', 'aly'];

function sayHello(name = 'Will') {
    console.log('hello ' + name + '!');
}

sayHello('Julie');
*/


function greetUser(user = {name: 'Anonymous'}) {
    console.log('hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Stu'});






