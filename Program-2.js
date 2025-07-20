function series(a) {
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    return result;
}
try {
    const a = parseInt(prompt("enter number"));
    if (isNaN(a) || a < 1) {
        console.log("numbe should be greater than 0");
    } else {
        const result = series(a);
        console.log(`result: ${result.join(", ")}`);
    }
} catch (e) {
    console.log("not possible");
}
