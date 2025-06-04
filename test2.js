function addBox() {
    let b = document.querySelector('body');
    let newDiv = document.createElement('div');

    // Add styling
    newDiv.style.width = "200px";
    newDiv.style.height = "100px";
    newDiv.style.border = "2px solid blue";
    newDiv.style.margin = "10px";

    b.appendChild(newDiv);
}

function removeBox() {
    let b = document.querySelector('body');
    let divs = b.querySelectorAll('div'); // Select all divs

    if (divs.length > 0) {
        b.removeChild(divs[divs.length - 1]); // Remove the last added div
    }
}
