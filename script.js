const clear =  document.querySelector('.clear');
const undo = document.querySelector('.undo');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

let previousValue = '';
let currentValue = '';
let lastOperator = '';


numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentValue;
  })
})

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
    previousDisplay.textContent = `${previousValue} ${lastOperator}`;
    currentDisplay.textContent = '0'; // <--previousValue
  })
})

function handleNumber(num){
  if (currentValue.length <= 6){
    currentValue += num;
  }
}

function handleOperator(op){
  lastOperator = op;
  previousValue = currentValue;
  currentValue = '';
}

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