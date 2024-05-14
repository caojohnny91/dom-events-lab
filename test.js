// if (operator == '+') {
//     return = num1 + num2;
// } else if (operator == '-') {
//     return = num1 - num2;
// } else if (operator == '*') {
//     return = num1 * num2;
// } else {
//     return = num1 / num2
// };
// console.log(`${ num1} ${operator} ${num2} = ${total}`);

// program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }




// const divideButtonElement = document.querySelector('#divide');
// const multiplyButtonElement = document.querySelector('#multiply');
// const subtractButtonElement = document.querySelector('#subtract');
// const addButtonElement = document.querySelector('#add');
// const clearButtonElement = document.querySelector('#clear');
// const equalButtonElement = document.querySelector('#equal');

// const operators = document.querySelectorAll('.operator')






//   displayButtonElement.addEventListener('click', () => {
//     displayElement.textContent = inputElement.value;
//     console.dir(displayButtonElement);
// });
  





// divideButtonElement.addEventListener('click', () => {
//     console.log('/');
// });





// buttons = document.querySelectorAll("button")
//buttons.forEach((button) => {
    // button.addEventListener('click')
// })

// when a button is clicked (*) event.target inner text gives back the multplication sign
//let value = event.target  SET VALUES FOR EACH BUTTON
// only want to convert the number buttons to change sting to num
// let num = parse(val) if val is not a number then return Nan






      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);  //innertext gives us the numeric value of that button
      // Future logic to capture the button's value goes here...
