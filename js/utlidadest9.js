function cambiarLetras() {
    var entrada = document.getElementById("textico").value;
    var palabraMin = entrada.split(" ");
    
    for (var i = 0; i < palabraMin.length; i++) {
        palabraMin[i] = palabraMin[i].charAt(0).toUpperCase() + palabraMin[i].slice(1);
    }
    
    var resulta= palabraMin.join(" ");
    
    document.getElementById("resulta").textContent = "Texto convertido a mayus: " + resulta;
}