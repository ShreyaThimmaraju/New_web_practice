 pattern = ""
 let n = 5;
 for (let i = 1; i <= n; i++) {
 for (let s = 0; s < n - i; s++) {
        pattern += " ";
 }
    for(j = 1; j <= 2 * i - 1; j++) {
        pattern += "*"
    }
    pattern += "\n";
}
console.log(pattern);