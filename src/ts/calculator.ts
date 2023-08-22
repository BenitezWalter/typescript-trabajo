//la funcion debe especificar que tipo de parametro va recibir, y tambien que va retornar
function getInputValue(id: string): number {
  const inputElement = document.getElementById(id) as HTMLInputElement;
  return parseFloat(inputElement.value);
}

function showMessage(message: string): void {
  alert(message);
}

function add(): void {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");
  const result = num1 + num2;
  showMessage(`El resultado de la suma es: ${result}`);
}

function subtract(): void {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");
  const result = num1 - num2;
  showMessage(`El resultado de la resta es: ${result}`);
}

function multiply(): void {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");
  const result = num1 * num2;
  showMessage(`El resultado de la multiplicación es: ${result}`);
}

function divide(): void {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");

  if (num2 !== 0) {
    const result = num1 / num2;
    showMessage(`El resultado de la división es: ${result}`);
  } else {
    showMessage("No se puede dividir por cero");
  }
}
