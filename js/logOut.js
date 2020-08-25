function userOut() {
    
    var salir = gapi.salir.getAuthInstance();
    salir.userOut();
    salir.disconnect();
}

function clear() {
    var user = localStorage.getItem('passsword');
    localStorage.clear();
    
    if (user = !unedefined) {
        window.location.href = "index.html";
    };
    gapi.load('salir', function(){
        gapi.salir.clear().then(function (e){
            salir();
            window.location.href="index.html";
        });
    });
   
}