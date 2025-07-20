function pg2(x) {
    let r = [];
    for (let i = 0; i < x; i++) {
        r.push(2 * i + 1);
    }
    return r;
}

try {
    const x = parseInt(prompt("enter the numebr"));
    if (isNaN(x) || x < 1) {
        console.log("error");
    } else {
        const r = pg2(x);
        console.log(`res: ${r.join(", ")}`);
    }
} catch (e) {
    console.log("error");
}
