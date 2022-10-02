document.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let first = document.querySelector('#first_operand').value;
    let second = document.querySelector('#second_operand').value;
    let operation = document.querySelector('#operation').value;
    let output = document.querySelector('#output');

    let operations = {
      '+': (a, b) => +a + +b,
      '-': (a, b) => +a - +b,
      '*': (a, b) => +a * +b,
      '/': (a, b) => +a / +b,
    };

    let result;

    switch (operation) {
      case '+':
        result = operations['+'](first, second);
        break;
      case '-':
        result = operations['-'](first, second);
        break;
      case '*':
        result = operations['*'](first, second);
        break;
      case '/':
        result = operations['/'](first, second);
        break;
    }

    output.textContent = result;
  });
});
