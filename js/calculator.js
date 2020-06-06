const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    rad: true,
  };
  
  function inputDigit(target) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (target.classList.contains('pi')) {
      target.value = Math.PI;
    } 
    if (target.classList.contains('e')) {
      target.value = Math.E;
    }
    if (waitingForSecondOperand === true) {
      calculator.displayValue = target.value;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? target.value : displayValue + target.value;
    }
  }
  
  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;
    
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }

  function toggleRad() {
    if (calculator.rad == false) {
      document.querySelector('.rad-line').innerHTML = "RAD";
      document.querySelector('#rad-button').innerHTML = "DEG";
      calculator.rad = true;

    } else {
      document.querySelector('.rad-line').innerHTML = "DEG";
      document.querySelector('#rad-button').innerHTML = "RAD";
      calculator.rad = false;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '^': (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),

    'e^': (firstOperand, secondOperand) => Math.pow(Math.E, secondOperand),

    'yroot': (firstOperand, secondOperand) => Math.pow(firstOperand, (1 / secondOperand)),
  
    '=': (firstOperand, secondOperand) => secondOperand,

  };
  
  function resetCalculator() {
    calculator.displayValue = '';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }

    if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains('negative')) {
      calculator.displayValue *= -1;
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains('sqrt')) {
      calculator.displayValue = Math.sqrt(calculator.displayValue);
      updateDisplay();
      return;
    }

    if (target.classList.contains('inverse')) {
      calculator.displayValue = 1 / calculator.displayValue;
      updateDisplay();
      return;
    }

    if (target.classList.contains('square')) {
      calculator.displayValue = Math.pow(calculator.displayValue, 2);
      updateDisplay();
      return;
    }

    if (target.classList.contains('rad')) {
      toggleRad();
      updateDisplay();
      return;
    }

    if (target.classList.contains('sin')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.sin(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.sin(radians);
      }
      updateDisplay();
      return;
    }

    if (target.classList.contains('cos')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.cos(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.cos(radians);
      }
      updateDisplay();
      return;
    }

    if (target.classList.contains('tan')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.tan(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.tan(radians);
      }
      updateDisplay();
      return;
    }

    if (target.classList.contains('sinh')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.sinh(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.sinh(radians);
      }
      updateDisplay();
      return;
    }

    if (target.classList.contains('cosh')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.cosh(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.cosh(radians);
      }
      updateDisplay();
      return;
    }

    if (target.classList.contains('tanh')) {
      if (calculator.rad == true) {
        calculator.displayValue = Math.tanh(calculator.displayValue);
      } else {
        radians = calculator.displayValue * (Math.PI/180);
        calculator.displayValue = Math.tanh(radians);
      }
      updateDisplay();
      return;
    }

    inputDigit(target);
    updateDisplay();
  });