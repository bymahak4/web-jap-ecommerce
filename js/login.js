//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    localStorage.setItem('Name',profile.getName());

        localStorage.setItem('Name',profile.getGivenName());
        localStorage.setItem('Email',profile.getEmail());
        window.location.href="home.html";
        
          
    }

    var form = document.forms[0];
    form.addEventListener('submit', function(e){
        var user = form[0].value;
        var password = form[1].value;
        localStorage.setItem('Name',user);
        
    })
    

document.addEventListener("DOMContentLoaded", function (e) {
    
    
});