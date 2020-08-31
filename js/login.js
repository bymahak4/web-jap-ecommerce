var formulario = document.forms[0];

function onSignIn(googleUser) {
    
    var profile = googleUser.getBasicProfile();
 
    localStorage.setItem('Name',profile.getName());

    localStorage.setItem('Name',profile.getGivenName());
     
    window.location.href = "home.html"; 
          
}

    formulario.addEventListener('submit', function(e){
        var user        = formulario[0].value;
        var password    = formulario[1].value;
        
                
        
        localStorage.setItem('Name', user);
        localStorage.setItem('password', password);
        
        window.location.href = "home.html";
    })
    

document.addEventListener("DOMContentLoaded", function (e) {
    
    if (localStorage.getItem('Name') != undefined){
        window.location.href = "home.html";
      }
});