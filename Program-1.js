class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.trim();
    }
    calculate() {
        switch (this.operation) {
            case "+":
                return this.a + this.b;
            case "-":
                return this.a - this.b;
            case "*":
                return this.a * this.b;
            case "/":
                if (this.b === 0) {
                    throw new Error("Can't divide by zero!");
                }
                return this.a / this.b;
            default:
                throw new Error("Use: +, -, *, /");
        }
    }
}
try {
    const a = prompt("Enter first number");
    const b = prompt("Enter second number");
    const operation = prompt("Enter operation");
    const calc = new Calculator(a, b, operation);
    console.log(`Result: ${calc.calculate()}`);
} catch (e) {
    console.log(`Error: ${e.message}`);
