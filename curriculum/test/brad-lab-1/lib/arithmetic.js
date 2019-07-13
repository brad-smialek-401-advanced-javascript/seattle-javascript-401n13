'use strict';

let arithmetic = module.exports = {};


arithmetic.add = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return null;
    } else {
      sum += arr[i];
    }
  }
  return sum;
};


arithmetic.subtract = function (arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return null;
    } else {
      sum = sum - arr[i];
    }
  }
  return sum;
};


arithmetic.multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return null;
    } else {
      product = product * arr[i];
    }
  }
  return product;
};

arithmetic.divide = function (arr) {
  let val = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || arr[i] === '0') {
      return null;
    } else {
      val = val / arr[i];
    }
  }
  return val;
};

