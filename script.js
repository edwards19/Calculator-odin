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

equals.addEventListener('click', () => {
  if(currentValue != '' && previousValue != ''){
    calculate()
    previousDisplay.textContent = '0';
    if (previousValue.length <= 15) {
      currentDisplay.textContent = previousValue;
    } else {
      currentDisplay.textContent = previousValue.slice(0, 14) + '...';
    }
  }
})

decimal.addEventListener('click', () => {
  addDecimal()
})

clear.addEventListener(('click'), () => {
  previousDisplay.textContent = '0';
  currentDisplay.textContent = '0';
  previousValue = '';
  currentValue = '';
  lastOperator = '';
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

function calculate(){
  previousValue = +previousValue;
  currentValue = +currentValue;

  // if (lastOperator === '+'){
  //   add(previousValue, currentValue)
  // } else if (lastOperator === '−'){
  //   subtract(previousValue, currentValue)
  // } else if (lastOperator === '×'){
  //   multiply(previousValue, currentValue)
  // } else {
  //   divide(previousValue, currentValue)
  // }

  if (lastOperator === '+') {
    previousValue += currentValue
  } else if (lastOperator === '−') {
    previousValue -= currentValue
  } else if (lastOperator === '×') {
    previousValue *= currentValue
  } else {
    previousValue /= currentValue
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = currentValue.toString();
  console.log(previousValue)
}

function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}

function addDecimal(){
  if (!currentValue.includes('.')){
    currentValue += '.';
  }
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