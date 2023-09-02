function substituirPalavra(texto) {
    var palavrasEquivalentes = {
      "PendÃªncia": "Pendência",
      // Adicione mais mapeamentos de palavras conforme necessário
    };
  
    var textoSubstituido = texto;
  
    for (var palavra in palavrasEquivalentes) {
      var palavraSubstituta = palavrasEquivalentes[palavra];
      textoSubstituido = textoSubstituido.replace(palavra, palavraSubstituta);
    }
  
    return textoSubstituido;
  }
  
  // Array com as strings a serem formatadas
  var stringsParaFormatar = [
    "XX - PendÃªncia XXXXX",
    "XX - PendÃªncia XX",
    "XX - PendÃªncia XXX"
  ];
  
  // Iterar pelas strings e substituir a palavra
  stringsParaFormatar.forEach(function(textoOriginal) {
    var textoSubstituido = substituirPalavra(textoOriginal);
    console.log("Texto Substituído:", textoSubstituido);
  });
  