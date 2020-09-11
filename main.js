// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions

//////////////////////////////////////////////////////////////////////////////////////////////////

function getSign() {
    setNum('sign');
}

function evenOrOdd() {
    setNum('even-odd');
}

function multipleOf10() {
    setNum('multiple');
}


function setNum(name) {
    return numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById(name).innerHTML = getSign(numInput);
    document.getElementById(name).innerHTML = evenOrOdd(numInput);
    document.getElementById(name).innerHTML = multipleOf10(numInput);
}