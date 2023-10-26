function generarFibonacci() {
    const ingreso = document.getElementById("numFib").value;

    if (isNaN(ingreso) || ingreso < 0) {
        // Verificar si la entrada no es un número válido
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let fibArreglo = [0, 1];

    for (let i = 2; i < ingreso; i++) {
        fibArreglo[i] = fibArreglo[i - 1] + fibArreglo[i - 2];
    }

    const resultado = fibArreglo.join(", ");
    document.getElementById("resultado").textContent = resultado;
}