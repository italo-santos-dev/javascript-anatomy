function formatarSaida(texto) {
    if (texto) {
        // Substituir "NÃ£o" por "Não"
        return texto.replace(/NÃ£o/g, 'Não');
    } else {
        return "";
    }
}

// Exemplo de uso
var saidaOriginal = "Isso é um exemplo de NÃ£o.";
var saidaFormatada = formatarSaida(saidaOriginal);

console.log("Registro ID Secund\u00E1rio"); // Saída: "Isso é um exemplo de Não."

var aComAcento = "\u00E1";
console.log(aComAcento); 