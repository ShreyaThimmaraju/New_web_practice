pa ttern = ""
for(i = 1; i <= 5; i++) {
    for(j = 1; j <= 5; j++) {
        pattern = pattern + String.fromCharCode(i + 64)
    }
    pattern += "\n"
}
console.log(pattern);

