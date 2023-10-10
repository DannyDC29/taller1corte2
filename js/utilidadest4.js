// Función para calcular la cuota mensual de la hipoteca
function cuotaMensual() {
    var montoPrest = parseFloat(document.getElementById("montoPrest").value);
    var interesAnual = parseFloat(document.getElementById("interesAnual").value) / 100;
    var plazoPrestamoAnnos = parseInt(document.getElementById("plazoPrestamo").value);
    
    var numeroPagos = plazoPrestamoAnnos * 12;
    var interesMensual = interesAnual / 12;
    
    var mensualii = (montoPrest * interesMensual) / (1 - Math.pow(1 + interesMensual, -numeroPagos));
    
    var pagoMensualFort = mensualii.toFixed(2);
    
    document.getElementById("resultado").textContent = "La cuota mensual es de $" + pagoMensualFort;
}
