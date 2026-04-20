const paires = [
    [0, ""], [0, "0"], [0, false], ["", false], [null, undefined],
    [null, false], [NaN, NaN], [1, "1"], [" \t\n ", 0]
];
let Count = 0;
paires.forEach(([a, b]) => {
    const eq = a == b;
    const strict = a === b;
    if (eq && !strict) {
        Count++;
    }
    console.log(`${typeof a === 'string' ? `"${a}"` : a} == ${typeof b === 'string' ? `"${b}"` : b} -> ${eq} | ${typeof a === 'string' ? `"${a}"` : a} === ${typeof b === 'string' ? `"${b}"` : b} -> ${strict}`);
});
console.log("---");
console.log(`${Count} paire(s) où == et === donnent des résultats différents`);