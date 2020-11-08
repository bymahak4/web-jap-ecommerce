var form = document.forms[0];

function onSignIn(googleUser) {
    var empty   = "";
    var profile = googleUser.getBasicProfile();
    localStorage.setItem('Name',profile.getName());
    localStorage.setItem('User',profile.getGivenName());
    localStorage.setItem('Name',profile.getGivenName());
    localStorage.setItem('Email',profile.getEmail());
    localStorage.setItem('lastName',profile.getFamilyName());
    localStorage.setItem('birthdate', empty);
    localStorage.setItem('tel', empty);
    //localStorage.setItem('img', profile.getImageUrl());

    window.location.href = "home.html"; 
          
}

  

document.addEventListener("DOMContentLoaded", function (e) {
    
    form.addEventListener('submit', function(e){
        
        var user        = form[0].value;
        var password    = form[1].value;
        var empty       = "";
        var img         = "./img/myProfile/default_avatar.png";

        localStorage.setItem('Name', user);
        localStorage.setItem('User', user);
        localStorage.setItem('password', password);
        localStorage.setItem('Email', empty);
        localStorage.setItem('lastName', empty);
        localStorage.setItem('birthdate', empty);
        localStorage.setItem('tel', empty);
        //localStorage.setItem('img', img);
        
        window.location.href = "home.html";
    })

    if (localStorage.getItem('Name') != undefined){
        window.location.href = "home.html";
      }

});