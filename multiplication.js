function multiplicationTable(num) {
    let table = [];
    for(i = 1; i <= 6; i++) {
        table.push(num * i);
    }
    return table;
}
console.log(multiplicationTable(5));
