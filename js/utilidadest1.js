var inventario = {};

function agregarProducto() {
    var nombreProducto = document.getElementById("nombreProducto").value;

    var precioProducto = parseFloat(document.getElementById("precioProducto").value);

    var productoDispo = parseInt(document.getElementById("productoDispo").value);

    if (!inventario[nombreProducto]) {
        inventario[nombreProducto] = {
            precio: precioProducto,
            stock: productoDispo
        };
        document.getElementById("resultadoxd").innerHTML = "Producto guardado ^^";
    } else {
        document.getElementById("resultadoxd").innerHTML = "El producto ya ha sido agregado al inventario con anterioridad :(";
    }
}

function realizarVenta() {
    var venderProdct = document.getElementById("venderProdct").value;
    var quantitySold = parseInt(document.getElementById("quantitySold").value);

    if (inventario[venderProdct] && inventario[venderProdct].stock >= quantitySold) {
        inventario[venderProdct].stock -= quantitySold;
        var totalVenta = inventario[venderProdct].precio * quantitySold;
        document.getElementById("resultadoxd").innerHTML = "Total de ventas: $" + totalVenta + ". Stock disponible: " + inventario[venderProdct].stock + " unidad(es) ^^";
    } else {
        document.getElementById("resultadoxd").innerHTML = "Producto no disponible :(";
    }
}
