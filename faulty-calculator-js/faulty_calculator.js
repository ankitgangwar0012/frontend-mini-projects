let a = window.prompt("Enter a = ");
let b = window.prompt("Enter b = ");
a = Number(a);
b = Number(b);

console.log("Values you enter : a =", a, " b =", b);

let operator = window.prompt("Enter Operator (+,-,*,/");

console.log("Operator you enter :", operator);

let fault = (operator) => {
    if (operator === '+') {
        operator = '-';
    }
    else if (operator === '*') {
        operator = '+';
    }
    else if (operator === '-') {
        operator = '/';
    }
    else if (operator === '/') {
        operator = '**';
    }
    return operator;
}

let random = Math.random();
console.log("random value :", random);
if (random <= 0.4) {
    operator = fault(operator);
}

console.log("Updated operator :", operator);

function calculator(operator, a, b) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '/') {
        return a / b;
    }
    else if (operator === '**') {
        return a ** b;
    }
    else {
        return "Please enter a valid operator(+,-,*,/) and value";
    }
}

console.log("Result :", calculator(operator, a, b));