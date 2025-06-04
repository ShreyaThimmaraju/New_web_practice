numbers = [1, 2, 3, 4];
s = numbers.reduce((sum, num) => sum + num, 0);
console.log(s);
p = numbers.reduce((prod, n) => prod * n, 1);
console.log(p);