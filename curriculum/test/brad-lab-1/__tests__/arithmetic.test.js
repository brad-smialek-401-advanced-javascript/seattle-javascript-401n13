'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');

let word = faker.random.word();
let number = faker.random.number();


describe('arithmetic module', () => {
  
  it('can add an array of numbers', () => {
    expect(arithmetic.add([1,3,7,10,15])).toEqual(36);
  });

  it('can subtract an array of numbers ', () => {
    expect(arithmetic.subtract([1, 3, 9, -6, 10])).toEqual(-15);
  });

  it('can multiply an array of numbers', () => {
    expect(arithmetic.multiply([4,2,6,10])).toEqual(480);
  });

  it('can divide an array of numbers', () => {
    expect(arithmetic.divide([10, 5, 1])).toEqual(2);
  });

  it('only accepts numbers as params', () => {
    expect(arithmetic.add([word])).toEqual(null);
  });
});









