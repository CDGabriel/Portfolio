const prompt = require("prompt-sync")()

function getNumber(numberString) {
    while (true) {
        const number = parseFloat(prompt("Enter number " + numberString + ":"))
        if (isNaN(number)) {
            console.log("That is not a number")
        } else {
            return number
        }
    }
}

const number1 = getNumber('One');
const number2 = getNumber("Two");

const operator = prompt("Enter sign: ")

let result;
let valid = true;
switch(operator) {
    case "+": 
        result = number1 + number2;
        break;
    case "-": 
        result = number1 - number2;
        break;
    case "/":
        if (number === 0) {
            valid = false;
            console.log = "Can't divide by zero yet."
        }
        result = number1 / number2;
        break;
    case "*": 
        result = number1 * number2;
        break;
    default:
        console.log("Invalid")
        valid = false;
        break;
}
if (valid) console.log(number1, operator, number2, "=", result);

