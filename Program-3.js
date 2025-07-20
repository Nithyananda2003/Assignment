function program3(count) {
    let value = [];
    let counter = 0;

    while (counter < count) {
        let current = (2 * counter) + 1;
        value.push(current);
        counter = counter + 1;
    }
    return value;
}
try {
    const number = parseInt(prompt("enter number"));

    if (isNaN(number) || number < 1) {
        console.log("error");
    } else {
        const result = program3(number);
        console.log("result"+ result.join(","));
    }
} catch (error) {
    console.log("error");
}
