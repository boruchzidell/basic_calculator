document.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let first = document.querySelector('#first_operand').value;
    let second = document.querySelector('#second_operand').value;
    let operation = document.querySelector('#operation').value;
    let output = document.querySelector('#output');

    let result = eval(first + operation + second);

    output.textContent = result;
  });
});
