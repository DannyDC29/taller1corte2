function leerTamannio() {
    var entrada = document.getElementById("palabrasIngre").value;
    
    var cambiarPalabras = entrada.split(",").map(function(cambiarPalabra) {
        return cambiarPalabra.trim();
    });
    
    // tamaño xd
    var tamannio = cambiarPalabras.map(function(cambiarPalabra) {
        return cambiarPalabra.length;
    });
    
    // Mostrar tamaño
    var resulta = document.getElementById("resulta");
    resulta.textContent = "El número de letras de cada palara es: " + tamannio.join(", ");
}