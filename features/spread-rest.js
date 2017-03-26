/**
 * Created by willcarpenter on 3/25/17.
 */

function add(a, b) {
    return a + b;
}

var numbers = [4, 22];

console.log(add(...numbers));


var groupA = [-1, 2, 3, 4, 99];
var groupB = [11];

var unified = [0, ...groupA, ...groupB, 100];

for(var i of unified) {
    console.log(...groupA);
}
console.log(groupB);

unified.push(...[11, 34]);
console.log(unified);


function greetUsers(...names) {
    names.forEach(function(name) {
        console.log('hello ' + name)
    });

}
greetUsers('jill', 'june', 'lar');