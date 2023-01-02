
const splittedString = list.split(/,(?! )/)

console.log(splittedString)


let origString = "01.01.ID Register, Workplan ID";
let stringToAdd = "For";
let indexPosition = 0;

origString = origString.split(/,(?! )/);

// Insert the string at the index position
origString.splice(indexPosition, 0, stringToAdd);

// console.log(origString)

// Join back the individual characters
// to form a new string
newString = origString.join('');

// console.log(newString)

var meuArray = [["1","2","3"],["4","5","6"]];
var meuSegundoArray = ["7","8","9"];

meuArray.push(meuSegundoArray);

// console.log(meuArray)


let str2 = function(strs, str) {    
    var a = 0;	
    for (let i = 0; i < strs.length; i++) {        
        if (str == strs[i]) {
            a++;                       
            if (a > 1) return "true";
        }
    }
    return 'false';
}
// console.log(str2(["a", "b", "a", "c"], "c"));
// console.log(str2(["01.01.ID Register", "b", "a", "c"], "a"));



console.log(processData("01.01.ID Register,Workplan ID,Workplan Name, fdfdf"))
function processData(allText) {
    var record_num = 5;  //ou por mais que muitos elementos existem em cada lin
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    // alert(lines);
}



var dataObjects = data.map(function (arr) {
    var dataObject = {};
    columnNames.forEach(function(columnName, i){
      dataObject[columnName] = arr[i];
    });
    return dataObject;
  });

vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

for (let i = 0; i < vetorAdiciona.length; i++) {
  vetorPilha.push(vetorAdiciona[i]);
}

// console.log(vetorPilha)


const array = ['foo', 'boo', 'zoo'];
// const obj = Object.assign({}, array);
// console.log(obj)

array.reduce(function (target, key, index) {
  target[index] = key;
  // console.log(target)
  return target;

}, {}) //initial empty object


//let masterArray =[]

let masterArray = []

// console.log(masterArray.filter(i => i !== ""));

const products = ["camisa-PP", "camisa-M", "camisa-G", "camisa-GG", "camisa-GG", "camiseta-PP", "camiseta-G", "cueca-M", "blusa-XG", "blusa-XG", "blusa-XG", "blusa-P"];

let json = products.map(elements => JSON.parse(`{"${elements.split('-').join('":"')}"}`));

// console.log(json);

var aspCampoNuNull = masterArray.filter(function isNaN(masterArray) {
  return masterArray
})

// console.log(aspCampoNuNull)

//Remove Duplicates
let stringArray = masterArray.map(item => item.join('')); // transform all nested arrays into strings (for comparation)
let nonDuplicated = [] // temporary array to compare data
stringArray.forEach(nestedArrayString => {
  let reapeatedIndex = nonDuplicated.indexOf(nestedArrayString); // this is the comparator
  if (reapeatedIndex > 0) {
    indexToRemove = stringArray.indexOf(nestedArrayString);
    console.log('---indexToRemove', indexToRemove)
    stringArray.splice(indexToRemove, 1);
    masterArray.splice(indexToRemove, 1);
  } else { nonDuplicated.push(nestedArrayString) }
});
//
let lastString = stringArray.filter(foundString => foundString === stringArray[stringArray.length - 1])
if (lastString.length > 1) {
  stringArray.splice(stringArray.length - 1, 1)
  masterArray.splice(masterArray.length - 1, 1)
};
// console.log('>> masterArray',masterArray)

// function groupProducts(arr) {
//   // Nosso objeto (vazio) inicial:
//   const result = {};

//   for (const item of arr) {
//     // Cada `item` é algo como "camisa-PP".
//     // Portanto, podemos utilizar o método `split` para separá-lo em nome e tamanho:
//     const [col, prop] = item.split(',');

//     // No caso do `name` da iteração atual ainda não ter sido criado:
//     if (!result[col]) {
//       result[col] = {};
//     }

//     result[col][prop] = (result[col][prop] || 0) + 1;
//   }

//   return result;
// }

// console.log(
//   groupProducts(["01.01.ID Register","Workplan ID","Workplan Name","Regional", ""])
// );



// let arr = [
//   ["01.01.ID Register","Workplan ID","Workplan Name","Regional"],
// ];
// //Função de conversão do texto para objeto, movi para fora do map para facilitar a leitura
// function paraObjeto(texto) {
//   let resultado = new Object();
//   let result = new Object();

//   let propriedades = texto; // Separa as propriedades pelo espaço entre elas.
//   propriedades.forEach((item) => { //Para cada proriedade..
//     chaveValor = item.split(',');

//     resultado[chaveValor[0]] = result[chaveValor[1]]
//   });
//   return resultado; //Retorna o objeto preenchido
// }

// let objetos = arr.map(item => paraObjeto(item));

// // console.log(objetos);

// let resultado = new Object(); 



// for (var i = 0; i < col.length; i++) {
//   resultado[col[i]] = prop[i]
//   //result2.push(col[i] + ": " + prop[i]);
// }

// //JSON.parse(`{"${elements.split('-').join('":"')}"}`)

// const list = JSON.stringify(resultado)

// console.log(resultado);


var arr = [

];

//javascript create JSON object from two dimensional Array
function arrayToJSONObject(arr) {
  //header
  var keys = arr[0];

  //vacate keys from main array
  var newArr = arr.slice(1, arr.length);

  var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
  for (var i = 0; i < data.length; i++) {
    var d = data[i],
      o = {};
    for (var j = 0; j < l; j++)
      o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
}

let it = arrayToJSONObject([col, prop])

it.join(", ")

// console.log(it)

ga = ga.replace(/[\\]/g, '')

var str = "remove 'foo' delimiting double quotes";

if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"')
{
    console.log(str.substr(1,str.length -2));
}

console.log(str.substr(1,str.length -2));

var someStr = "{\"01.01.ID Register\":\"FA0000027\"}"
console.log(someStr)
console.log(someStr.replace(/^"(.+(?="$))"$/, '$1'));