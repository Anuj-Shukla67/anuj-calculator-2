let display = document.getElementById('display');
let lastAnswer = '';

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    lastAnswer = eval(display.value);
    display.value = lastAnswer;
  } catch (e) {
    display.value = "Error";
  }
}

function getAns() {
  display.value += lastAnswer;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', function(e) {
  const key = e.key;
  if (!isNaN(key) || ["+", "-", "*", "/", "%", ".", "(", ")"].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    delChar();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
