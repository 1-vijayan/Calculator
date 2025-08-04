let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateResult() {
    try {
        let expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

// *** New code for keyboard support ***
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '^'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// *** New function for theme toggle ***
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}