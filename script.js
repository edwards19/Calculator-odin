const clear =  document.querySelector('.clear');
const undo = document.querySelector('.undo');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const previous = document.querySelector('.previous');
const current = document.querySelector('.current');

function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}