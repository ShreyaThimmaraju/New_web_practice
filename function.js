
// No Arguments + No Return Value

function fun()
{
    console.log("fun() executing");
}

fun()


// Arguments + No Return Value

function greet(name) {
    console.log("Welcome " + name);
}

greet("Deep")

// Arguments + No Return Value

function add(n1, n2) {
return (n1 + n2);
}


sum = add(10, 20)
console.log("Sum = " + sum);


// No Arguments + Return value

function calculateSI()
{
    p = 10000
    r = 7.5
    t = 2
    si = (p * r * t)/100;
    return si;
}

si = calculateSI();
console.log("Simple Interest = " + si);

