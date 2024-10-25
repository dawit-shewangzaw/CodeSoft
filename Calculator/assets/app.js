const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value) || ''; // Handle empty input
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear error after 1.5 seconds
    }
}
