a = 10
b = 3   // number
c = '3'   // string


console.log(a == b);      // Equal to
console.log(a === b);     // Strict Equal to
console.log(a != b);      // Not equal
console.log(a !== b);     // Strict not equal
console.log(a > b);        // Greater than
console.log(a < b);       // Less than
console.log(a >= b);      // Greater than or equal
console.log(a <= b);      // Less than or equal


console.log(c == b);   // '3' is equal to 3  (only equal)
console.log(c === b);  // '3' is not equal to 3  (here === means strictly equal , so 3 is number and '3' is string , so number is equal to number , number is not equal to string)
