function generarContrato() {
    var nombreCliente = document.getElementById("nombreCliente").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var terminosCondiciones = document.getElementById("terminosCondiciones").value;
    
    var contratoLegal = `
    CONTRATO LEGAL DE YG ENTERTAINMENT
    

    Entre ${nombreCliente}  y la Compañía YG Ent., se establecen los siguientes términos y condiciones:
    ${terminosCondiciones}
    
    Fecha de Inicio: ${fechaInicio}

    Fecha de finalización: ${fechaFin}




    
    Firma del Cliente: ______________________________
    Firma de la Compañía: ___________________________
    
    
    Válido hasta ${fechaFin}.
    `;
    
    document.getElementById("textoContrato").textContent = contratoLegal;
}
