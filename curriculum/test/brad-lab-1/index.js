'use strict';

//requiring them or importing them from file path of modules so index can read them
const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
// const faker = require('faker');



//invokes greet function imported from greet.js module
//console logs them in node
console.log(greet.sayHello('Brad'));
console.log(greet.sayHello(6));


// invokes arithmetic functions imported from arithmetic.js module
// console logs them in node
console.log(math.add([1,3,7,10,15])); // 36
console.log(math.subtract([1, 3, 9, -6, 10])); // -15
console.log(math.multiply([4,2,6,10])); // 480
console.log(math.divide([10, 5, 1])); // 2
