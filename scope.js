//Global Scope
let a = 10;

//local Scope
function fun() {

let b = 20;
if(5 < b)
{
let c = 30;
console.log("Accessing in if block--");
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
}
}
fun();
