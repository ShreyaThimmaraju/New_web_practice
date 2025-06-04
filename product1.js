
//. This will take 2 seconds in each execution
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

setTimeout(function search() {
console.log("Searching for product");
setTimeout(function select() {
console.log("Selecting the product");
setTimeout(function add_to_cart() {
console.log("Adding to cart");
setTimeout(function pay() {
console.log("Making payment");
setTimeout(function receive_order() {
console.log("Waiting to receive order");
                               
}, 9000);
}, 8000);
}, 10000);
}, 9000);
}, 5000);

