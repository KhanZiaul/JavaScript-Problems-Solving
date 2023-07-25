// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 !== 0) {
                return number1 / number2;
            } else {
                return 'Division by zero is not possible';
            }
        default:
            return 'Operator is not valid';
    }
}

const result = calculator(9, 8, '*')

console.log(result)