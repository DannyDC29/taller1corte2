function graficou() {
    var dataInput = document.getElementById("datos").value;
    var dataArray = dataInput.split('-').map(Number);

    var barr = "";

    for (var i = 0; i < dataArray.length; i++) {
        var value = dataArray[i];
        var bar = '*'.repeat(value);
        barr += (i + 1) + "= " + bar + "\n";
    }

    document.getElementById("barr").textContent = barr;
}