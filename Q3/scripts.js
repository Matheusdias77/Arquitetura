function processarTexto() {
    let texto = document.getElementById("textoEntrada").value;

    texto = converterParaMaiusculas(texto);
    texto = removerEspacosExtras(texto);
    const numeroDePalavras = contarPalavras(texto);

    document.getElementById("textoResultado").textContent = `Texto processado: ${texto}`;
    document.getElementById("contadorPalavras").textContent = `Número de palavras: ${numeroDePalavras}`;

    document.getElementById("textoEntrada").value = '';
}

function converterParaMaiusculas(texto) {
    return texto.toUpperCase();
}

function removerEspacosExtras(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}
s
function contarPalavras(texto) {
    if (texto.trim() === "") {
        return 0;
    }
    return texto.split(/\s+/).length;
}
