/**
 * Created by willcarpenter on 3/26/17.
 */

var myMap = new Map();

// SET
myMap.set('name', 'Will');

// GET
console.log(myMap.get('name'));

// HAS
myMap.set('age', 25);
console.log(myMap.has('age'));

// DELETE
myMap.delete('name');

// SIZE
console.log(myMap.size);
