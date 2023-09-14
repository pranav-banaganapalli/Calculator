const displayValue = document.querySelector("#display");

// Storing all the buttons as nodeValue to use them later for forEach eventListener
const buttonValue = document.querySelectorAll("button");

let isOperator = true;
let isDot = false;
let isNumber = true;

// Adding eventListener to each button stored in buttonValue
buttonValue.forEach(element => {
    element.addEventListener('click', e => {
        // Getting the value for each button equivalent to their text
        let buttonText = e.target.innerText;

        // Applying reset to C button
        if (buttonText === "C") {
            isOperator = true;
            isDot = false;
            isNumber = true;
            // Value is set to 0 when C button is pressed
            displayValue.value = "0";
        }
        // Application for dot button, which can be used only once - so isDot is set to true, and if condition also checks for isDOt value
        else if (buttonText === '.' && isDot === false) {
            displayValue.value += buttonText;
            isDot = true;
        }
        // + button, isOperator condition is also checked 
        else if (buttonText === '+' && isOperator) {
            // if the display value is 0, it works as +, else the + operator will be appended to current displayValue
            if (displayValue.value != '0') {
                displayValue.value += buttonText;
            } else {
                displayValue.value = buttonText;
            }
            // For later use, only one operator can be used at a time, so isOperator is changed to false, since all the operators are checked for isOperator === true for their implementation, similar working in all the operators available
            isOperator = false;
            isNumber = true;
            isDot = false;
        }
        // Exactly same implementation as the + operator, consideration for 0 and multiple operator is done
        else if (buttonText === '-' && isOperator) {
            if (displayValue.value != '0') {
                displayValue.value += buttonText;
            } else {
                displayValue.value = buttonText;
            }
            isOperator = false;
            isNumber = true;
            isDot = false;
        }
        // Exactly same implementation as the + operator, consideration for 0 and multiple operator is done
        else if (buttonText === '*' && isOperator) {
            if (displayValue.value != '0') {
                displayValue.value += buttonText;
                isOperator = false;
                isNumber = true;
                isDot = false;
            }
        }
        // Exactly same implementation as the + operator, consideration for 0 and multiple operator is done
        else if (buttonText === '/' && isOperator) {
            if (displayValue.value != '0') {
                displayValue.value += buttonText;
                isOperator = false;
                isNumber = true;
                isDot = false;
            }
        }
        // Exactly same implementation as the + operator, consideration for 0 and multiple operator is done
        else if (buttonText >= '0' && buttonText <= 9 && isNumber) {
            if (buttonText === '0' && displayValue.value === '0') {
            } else if (displayValue.value === '0') {
                displayValue.value = buttonText;
            } else {
                displayValue.value += buttonText;
            }
            isOperator = true;
        } else if (buttonText === '=') {
            // Calculation is carried out for whatever is on the screen
            displayValue.value = eval(displayValue.value)
            // isNumber is set to false because after evaluation, same calculation is not required, all the other operators changes isNumber to true to account for change in display
            isNumber = false;
        } else if (buttonText === 'del') {
            // remove the last character
            displayValue.value = displayValue.value.slice(0, - 1);
        }
    });
})