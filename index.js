// Selecting necessary elements
const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span");
const signs = document.querySelectorAll(".sign");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const equals = document.querySelector(".equals");

// Variables to store values and states
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

// Add event listeners for number buttons
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const atr = e.target.getAttribute("value");
    if (!isFirstValue) {
      getFirstValue(atr);
    } else {
      getSecondValue(atr);
    }
  });
});

function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue; // Convert to number
}

function getSecondValue(el) {
  if (firstValue !== "" && sign !== "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue; // Convert to number
  }
}

// Add event listeners for sign buttons
signs.forEach((signButton) => {
  signButton.addEventListener("click", (e) => {
    sign = e.target.getAttribute("value");
    isFirstValue = true;
  });
});

// Add event listener for equals button
equals.addEventListener("click", () => {
  result.innerHTML = "";
  if (sign === "+") {
    resultValue = firstValue + secondValue;
  } else if (sign === "-") {
    resultValue = firstValue - secondValue;
  } else if (sign === "x") {
    resultValue = firstValue * secondValue;
  } else if (sign === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";

  checkResultLength();
});

function checkResultLength() {
  resultValue = resultValue.toString();
  if (resultValue.length >= 8) {
    resultValue = parseFloat(resultValue).toFixed(5);
    result.innerHTML = resultValue;
  }
}

// Add event listener for negative button
negative.addEventListener("click", () => {
  if (firstValue !== "") {
    firstValue = -firstValue;
    result.innerHTML = firstValue;
  } else if (secondValue !== "") {
    secondValue = -secondValue;
    result.innerHTML = secondValue;
  }
});

// Add event listener for percent button
percent.addEventListener("click", () => {
  if (firstValue !== "" && !isFirstValue) {
    firstValue = firstValue / 100;
    result.innerHTML = firstValue;
  } else if (secondValue !== "") {
    secondValue = secondValue / 100;
    result.innerHTML = secondValue;
  }
});

// Add event listener for clear button
clear.addEventListener("click", () => {
  result.innerHTML = 0;
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
});
