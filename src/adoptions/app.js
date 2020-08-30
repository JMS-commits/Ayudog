
function setFile(){
    var file = fileInput.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'prueba/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
        //location.reload()
    }).catch(function(e){
        //location.reload()
        console.log(e);
    });
}


function setFileWalk(fileItem, descripcion){//Ok
    var file = fileItem.files[0];
    var storageUrl = 'walk/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
        var name = file.name
        var type = name.split('.').pop()
        firebase.database().ref(storageUrl).push({
            fileName : name,
            type : type.toLowerCase(),
            descripcionWalk: descripcion
        }).then((res) => {
            readWalkData();
            $("#modalUpload").modal("hide");
            $("#modalWalk").modal("hide");
        });
    }).catch(function(e){
        $("#modalUpload").modal("hide");
        alert("Ha ocurrido un error inesperado intente más tarde");
        console.log(e);
    });
}

function setFileNews(fileItem, descripcion, isPrincipal){//Ok
    var file = fileItem.files[0];
    var storageUrl = 'news/';
    var ref = firebase.storage().ref(storageUrl + file.name);
    ref.put(file).then(function(snapshot) {
        firebase.database().ref(storageUrl).push({
            descripcionNews: descripcion,
            fileName : file.name,
            isPrincipal: isPrincipal
        }).then((res) => {
            readNewsData();
            $("#modalUpload").modal("hide");
            $("#modalNews").modal("hide");
        });
    }).catch(function(e){
        $("#modalUpload").modal("hide");
        alert("Ha ocurrido un error inesperado intente más tarde");
        console.log(e);
    });
}

function setFileAbout(fileItem){
    var file = fileItem.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'about/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
        //location.reload()
        readAboutData();
        $("#modalUpload").modal("hide")
    })
}

function setFileAdoption(key, imageName, nombre, descripcion, genero, edad, tamanio, fileItem, vacunado, desparasitado){
    var file = fileItem.files[0];
    var storageUrl = 'adoption/';
    var ref;
    if(key!=null){
        ref = firebase.storage().ref(storageUrl + imageName);
        if(file != null){
            $("#modalLoading").modal("show");
            ref.put(file).then(function() { 
                firebase.database().ref(storageUrl+key).update({
                    nombre: nombre,
                    descripcion: descripcion,
                    genero: genero,
                    edad: edad,
                    tamanio: tamanio,
                    vacunado: vacunado,
                    desparasitado: desparasitado
                }).then(() => {
                    $("#modalLoading").modal("hide");
                    $("#modalUpload").modal("hide");
                    $("#modalAdoptionDetail").modal("hide");
                    readAdoptionData();
                }).catch(function(e){
                    alert("Ha ocurrido un error inesperado intente más tarde");
                    $("#modalUpload").modal("hide");
                    console.log(e);
                });
             })
        }else{
            firebase.database().ref(storageUrl+key).update({
                nombre: nombre,
                descripcion: descripcion,
                genero: genero,
                edad: edad,
                tamanio: tamanio,
                vacunado: vacunado,
                desparasitado: desparasitado
            }).then(async ()  => {
                $("#modalUpload").modal("hide");
                $("#modalAdoptionDetail").modal("hide");
                readAdoptionData();
            }).catch(function(e){
                alert("Ha ocurrido un error inesperado intente más tarde");
                $("#modalUpload").modal("hide");
                console.log(e);
            });success = true
        }
    }else{
        ref = firebase.storage().ref(storageUrl + file.name);
        ref.put(file).then(function(snapshot) {
            firebase.database().ref(storageUrl).push({
                nombre: nombre,
                descripcion: descripcion,
                genero: genero,
                edad: edad,
                tamanio: tamanio,
                fileName : file.name,
                vacunado : vacunado,
                desparasitado : desparasitado
            }).then((res) => {
                readAdoptionData();
                $("#modalUpload").modal("hide");
                $("#modalAdoption").modal("hide");
            });
        }).catch(function(e){
            alert("Ha ocurrido un error inesperado intente más tarde");
            $("#modalUpload").modal("hide");
            console.log(e);
        });
    }
}

function setFileExperience(fileItem){
    var file = fileItem.files[0];// use the Blob or File API.
    //var blob = new Blob(file, {type: 'image/jpge'});
    var storageUrl = 'experience/';
    var ref = firebase.storage().ref(storageUrl + file.name);

    ref.put(file).then(function(snapshot) {
        location.reload()
    }).error(function(e){
        location.reload()
        console.log(e);
    });
}