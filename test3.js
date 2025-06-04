function java() { 
    resetButtons();
    document.querySelector('#java').classList.add('active');
}

function python() {
    resetButtons();
    document.querySelector('#python').classList.add('active');
}

function cpp() {
    resetButtons();
    document.querySelector('#cpp').classList.add('active');
}

function golang() {
    resetButtons();
    document.querySelector('#golang').classList.add('active');
}

// Helper function to remove 'active' class from all buttons
function resetButtons() {
    document.querySelector('#java').classList.remove('active');
    document.querySelector('#python').classList.remove('active');
    document.querySelector('#cpp').classList.remove('active');
    document.querySelector('#golang').classList.remove('active');
}
