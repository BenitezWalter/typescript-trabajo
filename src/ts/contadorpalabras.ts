function obtenerOracion(id: string): string {
  const inputElement = document.getElementById(id) as HTMLInputElement;
  return inputElement.value;
}

function contarPalabras(): void {
    const oracion = obtenerOracion("oracion")

    const palabras = oracion.split(" ")

    alert(`La cantidad de palabras que tiene la oracion es ${palabras.length}`)

}
