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
    }).error(function(e){
        console.log(e);
    });
}

function setFileWalk(fileItem){
    var file = fileItem.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'walk/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    });
}

function setFileNews(fileItem){
    var file = fileItem.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'news/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    });
}

function setFileAdoption(fileItem){
    var file = fileItem.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'adoption/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    });
}