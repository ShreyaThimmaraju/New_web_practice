var a = 10;
function outer()
{
    console.log("Outer Exceuting");
    var  b = 20;

    function inner()
{ 
    console.log("Inner Exceuting");
    var c = 30;
}
inner();
}
outer();
