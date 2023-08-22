type Medida = "celsius" | "fahrenheit";

function obtenerGrados(id: string): number {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    return parseFloat(inputElement.value);
}

function obtenerMedida(id: string): Medida {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    return inputElement.value as Medida;
}

function convertir(): void {
    const temperatura = obtenerGrados("temperatura");
    const medida = obtenerMedida("medida");

    let resultado: string;
    
    if (medida === "celsius") {
        const fahrenheit = temperatura * 9/5 + 32;
        resultado = `${temperatura} °C equivale a ${fahrenheit.toFixed(2)} °F`;
    } else if (medida === "fahrenheit") {
        const celsius = (temperatura - 32) * 5/9;
        resultado = `${temperatura} °F equivale a ${celsius.toFixed(2)} °C`;
    } else {
        resultado = "Selecciona una medida válida (celsius o fahrenheit)";
    }

    alert(resultado);
}
