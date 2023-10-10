function generarKard() {
    var nombre = document.getElementById("nombre").value;
    var cargo = document.getElementById("cargo").value;
    var compannia = document.getElementById("compannia").value;
    var correo = document.getElementById("correo").value;

    var tarjetaPresent =
        "Nombre: " + nombre + "<br><br>" +
        "Cargo: " + cargo + "<br><br>" +
        "Empresa: " + compannia + "<br><br>" +
        "correo: " + correo;

    document.getElementById("tarjetaPresent").innerHTML = tarjetaPresent;
}
