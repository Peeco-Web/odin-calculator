// Create basic math functions
function add(a,b) {return a + b}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide (a,b) {return a / b}

// Create variables for calculator operation
let firstN = 0;
let operator = '';
let secondN = 0;
let operatorSelcted = false;
let operatorCounter = 0;

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


// Numbers show on screen when pressed
const screen = document.querySelector('.screen')
const screenValue = document.querySelector('.numberScreen')
const zeroScreen = document.querySelector('.zeroScreen')
screenValue.innerHTML = ''
zeroScreen.innerHTML = '0'

for (let i=0; i<10; i++) {
    document.querySelector(`.a${i}`).addEventListener('click',() => {
        if(operatorSelcted) {
            screenValue.innerHTML = '';
            zeroScreen.innerHTML = '0';
            operatorSelcted = false
        }
        screenValue.innerHTML += `${i}`;
        zeroScreen.innerText = '';
    });
}

// Add clear button
document.querySelector(".clearAll").addEventListener('click', clearScreen)

function clearScreen() {
    screenValue.innerHTML = '';
    zeroScreen.innerHTML = '0';
    operatorCounter = 0;
}

// Operator buttons
document.querySelector(".operators").addEventListener('click', operatorFunc)

function operatorFunc(event) {
    if(operatorCounter>0) {
        equals();
    }

    operatorSelcted = true;
    const button = event.target;
    operator = button.value;
    firstN = Number(screenValue.innerHTML);
    operatorCounter++;

    
}

// Equal button
document.getElementById("equals").addEventListener('click', equals)

function equals() {
    secondN = Number(screenValue.innerHTML);
    screenValue.innerHTML = Math.round( ( (operate(firstN,operator,secondN)) * 100000 )) / 100000 ;
}
