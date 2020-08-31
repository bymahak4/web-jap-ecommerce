var formulario = document.forms[0];

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    localStorage.setItem('Name',profile.getName());

    if (localStorage.getItem('Name') != undefined || sessionStorage.getItem('Name') != null){
        
        localStorage.setItem('Name',profile.getGivenName());
        localStorage.setItem('Email',profile.getEmail());
    
        window.location.href = "home.html";        
  }
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