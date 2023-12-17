var jsonString = '[]';


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


