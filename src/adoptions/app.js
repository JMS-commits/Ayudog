var fileInput = document.getElementById("file-input");
var stringInput = document.getElementById("string-input");


fileInput.onchange = function(event) {};

stringInput.onchange = function(event) {};

function setFile(){
    var file = fileInput.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'prueba/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    console.log('Reference: '+ref);
    console.log('File: '+file);
    ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    });
}