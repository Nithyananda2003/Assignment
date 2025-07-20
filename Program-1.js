class pg1 {
    constructor(x, y, output) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.output = output.trim();
    }
    doIt() {
        switch (this.output) {
            case "+":
                return this.x + this.y;
            case "-":
                return this.x - this.y;
            case "*":
                return this.x * this.y;
            case "/":
                if (this.y === 0) {
                    throw new Error("error");
                }
                return this.x / this.y;
            default:
                throw new Error("error");
        }
    }
}

try {
    const x = prompt("enter the number");
    const y = prompt("enter the number");
    const output = prompt("answer");
    const c = new pg1(x, y, output);
    console.log(`answer:${c.doIt()}`);
} catch (e) {
    console.log(`error ${e.message}`);
}
