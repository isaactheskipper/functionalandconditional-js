function calculate(num1, num2, operation) {
    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            return "Error: Division by zero is not allowed.";
        }
        result = num1 / num2;
    } else {
        return "Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }

    return result;
}

console.log(calculate(10, 5, "add"));       
console.log(calculate(10, 5, "subtract"));  
console.log(calculate(10, 5, "multiply"));  
console.log(calculate(10, 5, "divide"));   