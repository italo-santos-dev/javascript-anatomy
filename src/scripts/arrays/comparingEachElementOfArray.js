// comapring each element of array
let _oldObject =  [
    {
       "pendingContentExtraction": false,
       "name": "user.png",
       "contentText": null,
       "length": 1426,
       "_id": "6390c937829a706fd2e53b30",
       "contentType": "image/png",
       "hash": "1"
    },
    {
        "pendingContentExtraction": false,
        "name": "user.png",
        "contentText": null,
        "length": 1426,
        "_id": "6390c937829a706fd2e53b30",
        "contentType": "image/png",
        "hash": "1"
     },
     {
      "pendingContentExtraction": false,
      "name": "template.xlsx",
      "contentText": null,
      "length": 8972,
      "_id": "626adc7312ac8920f98cdcd2",
      "storage": "S3_AMAZON",
      "collection": "uploadedFiles",
      "contentType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "hash": "1"
   }
 ]
 
 let _object = [
    {
       "pendingContentExtraction": false,
       "name": "user.png",
       "contentText": null,
       "length": 1426,
       "_id": "6390c937829a706fd2e53b30",
       "storage": "S3_AMAZON",
       "collection": "uploadedFiles",
       "contentType": "image/png",
       "hash": "1"
    },
    {
       "pendingContentExtraction": false,
       "name": "template.xlsx",
       "contentText": null,
       "length": 8972,
       "_id": "626adc7312ac8920f98cdcd2",
       "storage": "S3_AMAZON",
       "collection": "uploadedFiles",
       "contentType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
       "hash": "1"
    }
 ]

const categoriasFiltradas = _object.filter(object => _oldObject.filter(oldObject => oldObject.hash === object.hash).length);
console.log(categoriasFiltradas)
console.log(categoriasFiltradas.length > 1)
console.log(JSON.stringify(categoriasFiltradas));

  for(var i=0;i<a.length;i++) {
    if(a[i]!=b[i]) {
        console.log(false);
    } else {
        console.log(true);
    }
  }

