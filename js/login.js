//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    localStorage.setItem('userName', profile.getName());

    if (localStorage.getItem('userName') != undefined || sessionStorage.getItem('Name') != null){
        localStorage.setItem('userName',profile.getGivenName());
        localStorage.setItem('userEmail',profile.getEmail());
        window.location.href="home.html";
    }
};
var form = document.forms[0];
form.addEventListener('submit', function(e){
    user = form[0].value;
    password = form[1].value;
        
    if(user == "" || user == null || user == undefined || password == "" || password == null || password == undefined){
        e.preventDefault();
        alert("Datos no correctos");
    }
        localStorage.setItem('userName',usr);
})


document.addEventListener("DOMContentLoaded", function(e){
    if (localStorage.getItem('userName') != undefined){
        window.location.href = "home.html";
    }
});