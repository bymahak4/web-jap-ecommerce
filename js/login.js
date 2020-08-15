//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function onSingIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var idToken = googleUser.getAuhResponse().idToken;
    if (idToken != undefined || idToken != null){
        window.location.href = "Home.html"
    };
}

document.addEventListener("DOMContentLoaded", function(e){
    
});