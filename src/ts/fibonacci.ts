function obtenerN(id: string): number {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    return parseFloat(inputElement.value);
}

function fibonacci(): void {
    const limite = obtenerN("num1");
    let a = 0;
    let b = 1;
    const fibonacciSeries = [a,b];

    for (let index = 2; index < limite; index++) {
        const siguiente = a + b;
        fibonacciSeries.push(siguiente);

        
        a = b;
        b = siguiente;
    }

    alert(fibonacciSeries)
}


