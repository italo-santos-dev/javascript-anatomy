var jsonString = '[{"Target Engenharia":"Test 9","RFSheet Ativo?":"NÃ£o","DOC-D apto para InÃ­cio?":"NÃ£o","BOM apto para InÃ­cio?":"NÃ£o","Registro ID SecundÃ¡rio":"WT22002613","Chave":"Test 2","Terrain Owner":"Test 11","WR apto para InÃ­cio?":"NÃ£o","Ordem Complexa (OC)":"Test 7","Workplan Name":"Test 1","Site Terrain Owner":"Test 10","RFSheet apto para InÃ­cio?":"NÃ£o","SI Ativo?":"NÃ£o","Workplan ID":"Test 0","FrequÃªncia":"Test 4","Tipo de PriorizaÃ§Ã£o":"Test 13","ClassificaÃ§Ã£o de Casa":"Test 6","Tecnologia":"Test 3","Tipo de Infra":"Test 8","ComentÃ¡rios do Focal":"Test 14","SI apto para InÃ­cio?":"NÃ£o","CÃ³digo OrÃ§amentÃ¡rio":"Test 5","DOC-D Ativo?":"NÃ£o","Planner":"Test 12","WR Ativo?":"NÃ£o","BOM Ativo?":"NÃ£o","Registro ID":"WT23003516"}]';


function normalizeSpecialCharacters(input) {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var jsonData = JSON.parse(jsonString);

jsonData.forEach(function (obj) {
    for (var key in obj) {
        obj[key] = normalizeSpecialCharacters(obj[key]);
    }
});

console.log(jsonData);


