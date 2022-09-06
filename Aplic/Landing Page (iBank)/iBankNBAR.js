function nbarjs() {
    var x = document.getElementById("nbar");
    if (x.className === "nnbar") {
        x.className +=" responsive";
    } else {
        x.className = "nnbar";
    }
}

// Este JS foi usado para animar barra de navegação "nbar" para dispositivos portateis.