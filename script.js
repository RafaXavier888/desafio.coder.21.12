function calcularFinanciamento() {
    let valorCasa = parseFloat(document.getElementById("valorCasa").value);
    let entrada = parseFloat(document.getElementById("entrada").value);
    let parcelas = parseInt(document.getElementById("parcelas").value);

    if (isNaN(valorCasa) || isNaN(entrada) || isNaN(parcelas) || valorCasa <= 0 || entrada < 0 || parcelas <= 0) {
        alert("Por favor, insira valores válidos para o financiamento.");
        return;
    }

    let valorFinanciado = valorCasa - entrada;
    let resultado = document.getElementById("resultadoFinanciamento");
    resultado.innerHTML = "";

    for (let i = parcelas; i > 0; i--) {
        let valorParcela = valorFinanciado / i;
        resultado.innerHTML += "Parcela " + i + ": R$" + valorParcela.toFixed(2) + "<br>";
    }
}
