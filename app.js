/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let value1 = null;
let value2 = null;
let operation = null;
let firstValue = true;

/*------------------------ Cached Element References ------------------------*/

let numbers = document.querySelectorAll(".number");

let operationBtns = document.querySelectorAll(".operation");
// console.dir(operationBtns)

let totalDisplay = document.querySelector(".display");
// console.dir(totalDisplay)
totalDisplay.innerText = 0;

let equalsBtn = document.querySelector(".equals");
// console.dir(equalsBtn)

let clearBtn = document.querySelector(".clear");
// console.dir(clearBtn)

/*-------------------------------- Functions --------------------------------*/

const add = () => {
  return parseInt(value1) + parseInt(value2)
};

const subtract = () => {
    return parseInt(value1) - parseInt(value2)
};

const multiply = () => {
    return parseInt(value1) * parseInt(value2)
};

const divide = () => {
    return parseInt(value1) / parseInt(value2)
};

const renderResult = () => {
  let total;
  if (operation === "add") {
    total = add();
  } else if (operation === "subtract") {
    total = subtract();
  } else if (operation === "multiply") {
    total = multiply();
  } else {
    total = divide();
  }

  totalDisplay.innerText = total;
  console.log(total);
};

const handleOperationBtn = (event) => {
  operation = event.target.id;
  firstValue = false;
  console.log(operation);
};

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (value1 == null && firstValue == true) {
      totalDisplay.innerText = event.target.innerText;
      value1 = totalDisplay.innerText;
    } else if (value1 != null && firstValue == true) {
      totalDisplay.innerText += event.target.innerText.toString();
      value1 = totalDisplay.innerText;
    } else if (value2 == null && firstValue == false) {
      totalDisplay.innerText = event.target.innerText.toString();
      value2 = totalDisplay.innerText;
    } else {
      totalDisplay.innerText += event.target.innerText.toString();
      value2 = totalDisplay.innerText;
    }
    console.log(value1);
    console.log(value2);
  });
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", handleOperationBtn);
});

equalsBtn.addEventListener("click", (event) => {
  renderResult()  
  console.log(event.target.innerText);
});

clearBtn.addEventListener("click", (event) => {
    totalDisplay.innerText = 0
    value1 = null
    value2 = null
    firstValue = true
  console.log(event.target.innerText);
});
