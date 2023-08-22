function obtenerNumero(id: string): number {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    return parseFloat(inputElement.value);
}

function tablaMultiplicar(): void {
    const numero = obtenerNumero("num1");
    let resultados: { [key: number]: number } = {}; // Declaración del objeto

    for (let index = 1; index <= 9; index++) {
        resultados[index] = numero * index;
    }

    let resultsString = "Tabla de Multiplicar:\n";

    for (const index in resultados) {
        resultsString += `${numero} x ${index} = ${resultados[index]}\n`;
    }

    alert(resultsString);
}
