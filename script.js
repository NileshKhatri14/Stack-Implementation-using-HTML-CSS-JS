let stack = [];

function push() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') {
        alert('Please enter a number');
        return;
    }
    stack.push(Number(inputValue));
    document.getElementById('inputValue').value = '';
    displayStack();
}

function pop() {
    if (stack.length === 0) {
        alert('Stack is empty');
        return;
    }
    const poppedValue = stack.pop();
    document.getElementById('result').innerText = `Popped: ${poppedValue}`;
    displayStack();
}

function peek() {
    if (stack.length === 0) {
        alert('Stack is empty');
        return;
    }
    const topValue = stack[stack.length - 1];
    document.getElementById('result').innerText = `Top: ${topValue}`;
}

function displayStack() {
    const stackDisplay = document.getElementById('stackDisplay');
    stackDisplay.innerHTML = '';
    stack.forEach((item, index) => {
        stackDisplay.innerHTML += `<div>Index ${index}: ${item}</div>`;
    });
}
