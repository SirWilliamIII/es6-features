/**
 * Created by willcarpenter on 3/31/17.
 */
//
// var array = ['first', 'second', 'third'];
//
// var [a, , c] = array;
//
// console.log(a, c, 5);

var todo = {
    description: 'Watch new es6 thingy',
    completed: false
};

var {description: message, completed} = todo;

console.log(message);

console.log(completed);