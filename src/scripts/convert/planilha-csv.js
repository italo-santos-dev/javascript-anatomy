var XLSX = require("xlsx");

function handleFile(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
    var workbook = XLSX.read(data);

    console.log(workbook)

    /* DO SOMETHING WITH workbook HERE */
  };
  reader.readAsArrayBuffer(file);
}

//input_dom_element.addEventListener("change", handleFile, false);


handleFile("assets/DRT.csv")