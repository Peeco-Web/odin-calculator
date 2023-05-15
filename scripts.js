// Create basic math functions
function add(a,b) {return a + b}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide (a,b) {return a / b}

// Create variables for calculator operation
let firstN = 0;
let operator = '';
let secondN = 0;

// Create operate function that takes in above variables and returns correct output
function operate(firstN,operator,secondN) {
    switch(operator) {
        case '+':
            return add(firstN,secondN);
        case '-':
            return subtract(firstN,secondN);
        case '*':
            return multiply(firstN,secondN);
        case '/':
            return divide(firstN,secondN);
    }
}









console.log(operate(4,'/',2))