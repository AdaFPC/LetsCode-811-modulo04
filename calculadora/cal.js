const enter = document.querySelector("#enter");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");
const input = document.querySelector("#num");
let total = [];

window.onload = function(){
  input.focus();
}

function getInputValue() {
  const num = input.value;
  input.value = "";
  return parseInt(num);
}

function getOperation() {
  const operation = document.querySelector(
    'input[name="operacao"]:checked'
  );
  if (operation == null) return (x, y) => 0;

  switch (operation.value) {
    case "+":
      return (x, y) => x + y;
    case "-":
      return (x, y) => x - y;
    case "*":
      return (x, y) => x * y;
    case "/":
      return (x, y) => x / y;
  }
}
function answer() {
  const answer = document.querySelector("#answer");
  if (total.length > 1) answer.innerText = total.reduce(getOperation());
}

enter.onclick = function () {
  total = [...total, getInputValue()];
};

equal.onclick = answer;

reset.onclick = function () {
  input.value = "";
  total = [];
};

