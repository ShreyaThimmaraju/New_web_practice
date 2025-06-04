function add() { 
try {
    a = 10;
    b = 20;
    c = a + b;
    console.log("Sum = " + c);
    
}

catch(ex) {
    console.log("Exception Handled");

}
 finally {
    console.log("finally block");

 }
}

console.log("Program starts");
add();
console.log("Program ends");

