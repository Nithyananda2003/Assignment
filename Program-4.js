function count(nums) {
    let c = {};
    for (let i = 1; i <= 9; i++) {
        c[i] = 0;
    }
    for (let n of nums) {
        for (let i = 1; i <= 9; i++) {
            if (n % i === 0) {
                c[i]++;
            }
        }
    }
    return c;
}

try {
    const s = prompt("enter numbers with comma");
    const n = s.split(",").map(x => parseInt(x.trim()));
    if (n.some(isNaN)) {
        console.log("error");
    } else {
        const num = count(n);
        console.log("counts:", num);
    }
} catch (e) {
    console.log("error");
}
