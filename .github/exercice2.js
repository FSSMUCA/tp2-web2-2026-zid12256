const Table = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < Table.length; i++) {
    const label = Table[i] === "" ? "(chaine vide)" : String(Table[i]);
    if (Table[i]) {
        console.log(label + " -> truthy");
    } else {
        console.log(label + " -> falsy");
    }
}