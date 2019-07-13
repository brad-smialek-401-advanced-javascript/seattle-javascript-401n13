'use strict';

let greet = module.exports = {};


greet.sayHello = function(str) {
  if(typeof str !== 'string'){return null;}
  // if(str.length > 1) {return null;}
  return `hello ${str}`;
};


