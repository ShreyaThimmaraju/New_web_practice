x = 1
pattern = ""
for(i = 1; i <= 4; i++) {
    for(j = 1; j <= i; j++) {
        pattern += x;
        x++
        if(j != i)
            pattern += "x"
    }
    pattern += "\n";
}
console.log(pattern);