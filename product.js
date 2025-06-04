// it will exceute  all at a time after 2 seconds

function search() {
    console.log("Searching for product");  
}

function select() {
    console.log("Selecting the product");  
}

function add_to_cart() {
    console.log("Adding to cart");  
}

function pay() {
    console.log("Making payment");  
}

function receive_order() {
    console.log("Waiting to receive order");  
}



// it will exceute 5 mins break 5 mins for second
setTimeout(function fun1() {
    console.log("instruction 1");



setTimeout(function fun2() {
    console.log("instruction 2");
},5000);
}, 5000);


