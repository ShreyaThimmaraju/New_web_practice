pattern = ""
for(i = 1; i <= 4; i++) {
    for(j = 1; j <= 5; j++) {
        if( i==1 || i==4 || j==1 || j==5)
            pattern += "*";
        else
        pattern += " "
}
    pattern += "\n"
}
console.log(pattern);