// calculator.js — Calculator functions
// These functions handle basic math operations

// ➕ Add two numbers
function add(a, b) {
  return a + b;
}

// ➖ Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// ✖️ Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// ➗ Divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

// 🎯 Main calculate function — called by the HTML buttons
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultEl = document.getElementById("result");

  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultEl.textContent = "⚠️ Please enter valid numbers!";
    resultEl.style.color = "red";
    return;
  }

  let result;

  switch (operation) {
    case "add":      result = add(num1, num2);      break;
    case "subtract": result = subtract(num1, num2); break;
    case "multiply": result = multiply(num1, num2); break;
    case "divide":   result = divide(num1, num2);   break;
    default:
      result = "Unknown operation";
  }

  resultEl.textContent = result;
  resultEl.style.color = "green";

  console.log(`${num1} ${operation} ${num2} = ${result}`);
}
