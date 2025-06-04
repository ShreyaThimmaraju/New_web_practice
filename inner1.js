var a = 10;
function outer() {
 console.log("Outer Exceuting");
  var b = 20;
function inner() {
    console.log("Inner Exceuting");
    var c = 30;
    // console.log("a = " + a);
    // console.log("b = " + b);
    // console.log("c = " + c);
}
// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c = " + c);
inner();
}
outer();
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);