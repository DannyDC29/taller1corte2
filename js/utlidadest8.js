function obtenerNumPares() {
    var entrada = document.getElementById("numIngresado").value;
    
    var numeros = entrada.split("-").map(function(numero) {
        return parseInt(numero.trim());
    });

    //Num pares
    var numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });

    //resultadou
    var resultadoDiv = document.getElementById("resulta");
    resultadoDiv.textContent = "Los números pares son: " + numerosPares.join(", ");
}
