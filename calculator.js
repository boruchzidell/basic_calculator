document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let getValueOf = (selector) => document.querySelector(selector).value;

    let first = +getValueOf('#first_operand');
    let second = +getValueOf('#second_operand');
    let operation = getValueOf('#operation');

    let operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    let mathFunction = operations[operation];

    let result = mathFunction(first, second);

    document.querySelector('#output').textContent = result;
  });
});
