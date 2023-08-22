function obtenerRango(id: string): number {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    return parseFloat(inputElement.value);
}

function contar(): void {
    const rangoInicio = obtenerRango("num1")
    const rangoFin = obtenerRango("num2")
    let pares = 0
    let impares = 0
    for (let index = rangoInicio; index < rangoFin; index++) {
        if(index % 2 === 0){
            pares = pares + 1
        }
        else{
            impares = impares + 1
        }
        
    }
    alert(`La cantidad de pares es:${pares} y la de impares:${impares}`)
  }
  