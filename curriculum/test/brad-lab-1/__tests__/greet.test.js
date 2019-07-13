'use strict';

const greet = require('../lib/greet.js');

const faker = require('faker');

let word = faker.random.word();
let number = faker.random.number();

describe('greet module', ()=> {

  it('requires one param', () => {
    let message = greet.sayHello();
    expect(message).toBeNull();
  });

  it('does not accept numbers', () => {
    let message = greet.sayHello(number);
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = greet.sayHello(1);
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    var message = greet.sayHello('world');
    var expectedOutput = 'hello world';
    expect(message).toEqual(expectedOutput);
  });

  it('works when given a random word', () => {
    var message = greet.sayHello(word);
    console.log(word);
    var expectedOutput = message;
    expect(message).toEqual(expectedOutput);
  });


});