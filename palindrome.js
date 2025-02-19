num = 121
s1 = "" + num
s2 = ""
for(i = s1.length - 1; i >= 0; i--)
    s2 = s2 + s1.charAt(i);

console.log(s1);
console.log(s2);