let currentValue = '';
let currentOperator = '';
let previousValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function appendOperator(operator) {
  if (currentValue !== '') {
    currentOperator = operator;
    previousValue = currentValue;
    currentValue = '';
  }
}

function calculate() {
  let result;
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  document.getElementById('display').value = result;
  currentValue = result.toString();
  previousValue = '';
  currentOperator = '';
}

function clearDisplay() {
  currentValue = '';
  currentOperator = '';
  previousValue = '';
  document.getElementById('display').value = '';
}
