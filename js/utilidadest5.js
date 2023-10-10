var palabras = ["guepardo", "felinos", "angora", "leopardo", "pantera", "caracal", "tigre", "savannah", "serval"];

var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

var palabraAdivinanza = "_".repeat(palabraSecreta.length);

var intentosMaximos = 5;
var intentosRestantes = intentosMaximos;

var letrasAdivinadas = [];

function actualizarPalabraAdivinanza() {
    document.getElementById("palabraAdivi").textContent = palabraAdivinanza;
}

function adivinarLetra() {
    var letra = document.getElementById("letraIntro").value.toLowerCase();
    
    if (letra.length === 1 && /^[a-z]$/.test(letra) && letrasAdivinadas.indexOf(letra) === -1) {
        letrasAdivinadas.push(letra);
        document.getElementById("letrasAdivi").textContent = letrasAdivinadas.join(", ");
        
        if (palabraSecreta.includes(letra)) {
            for (var i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    palabraAdivinanza = palabraAdivinanza.substring(0, i) + letra + palabraAdivinanza.substring(i + 1);
                }
            }
            actualizarPalabraAdivinanza();
            
            if (palabraAdivinanza === palabraSecreta) {
                alert("Adivinaste la palabra ^^");
                reiniciarJuego();
            }
        } else {
            intentosRestantes--;
            document.getElementById("intentosRestantes").textContent = intentosRestantes;
            
            if (intentosRestantes === 0) {
                alert("Se acabaron los intentos :(, la palabra correcta era: " + palabraSecreta);
                reiniciarJuego();
            }
        }
    } else {
        alert("Ingresa otra letra.");
    }
    
    document.getElementById("letraIntro").value = "";
}

function adivinarPalabra() {
    var palabraAdivinada = document.getElementById("introPalabra").value.toLowerCase();
    
    if (palabraAdivinada === palabraSecreta) {
        alert("Exacto, esa era la palabra jaja");
        reiniciarJuego();
    } else {
        alert("Esa no era la palabra :(");
    }
    
    document.getElementById("introPalabra").value = "";
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraAdivinanza = "_".repeat(palabraSecreta.length);
    letrasAdivinadas = [];
    intentosRestantes = intentosMaximos;
    document.getElementById("letrasAdivi").textContent = "";
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    actualizarPalabraAdivinanza();
}
actualizarPalabraAdivinanza();
