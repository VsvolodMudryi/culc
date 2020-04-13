const display = document.querySelector('.display');

document
  .querySelectorAll('.digits button')
  .forEach((button) => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
  if (display.value === '' && ev.target.innerText === '.') {
    display.value = '0.';
  } else if (display.value.slice(-1) === '.' && ev.target.innerText === '.') {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += ev.target.innerText;
  }
}

document
  .querySelectorAll('.oper button')
  .forEach((button) => button.addEventListener('click', operPressed));

function operPressed(ev) {
  if ('-+*/'.includes(display.value[display.value.length - 1])) {
    display.value = display.value.slice(0, -1);
    display.value += ev.target.innerText;
  } else if (display.value[display.value.length - 1] == null) {
    display.value = null;
  } else {
    display.value += ev.target.innerText;
  }
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
  if ('-+*/'.includes(display.value[display.value.length - 1])) {
    display.value = display.value.slice(0, -1);
  } else if (display.value === '') {
    display.value = null;
  } else if (
    Math.round(eval(display.value) * 100) / 100 === Infinity ||
    Math.round(eval(display.value) * 100) / 100 === -Infinity
  ) {
    display.value = "Don't do this!";
  } else {
      display.value = parseFloat(eval(display.value).toFixed(3));
    }
}

document.querySelector('.cleare').addEventListener('click', clearDisplay);

function clearDisplay() {
  display.value = '';
}

document.querySelector('.back').addEventListener('click', cleareLast);

function cleareLast() {
  display.value = display.value.slice(0, -1);
}

document.querySelector('.square-root').addEventListener('click', squareRoot);

function squareRoot() {
  isNaN(eval(display.value))
    ? (display.value = null)
    : (display.value =
        Math.round(Math.sqrt(eval(display.value)) * 100) / 100);
}

document
  .querySelector('.square-of-number')
  .addEventListener('click', squareOfNumbert);

function squareOfNumbert() {
  isNaN(eval(display.value))
    ? (display.value = null)
    : (display.value =
        Math.round(Math.pow(eval(display.value), 2) * 100) / 100);
}
