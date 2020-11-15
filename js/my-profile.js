function showMyProfileData() {
    if (localStorage.getItem('Name') != null || localStorage.getItem('Name') != undefined) {
        var img = "./img/myProfile/default_avatar.png";

        $('#showUser').val(localStorage.getItem("Name"));
        $('#showEmail').val(localStorage.getItem("Email"));
        $('#showName').val(localStorage.getItem("User"));
        $('#showLastName').val(localStorage.getItem("lastName"));
        $('#showImg').attr('src', localStorage.getItem("img"));
        //$('#idShowUrl').attr('placeholder', localStorage.getItem("img"));
        $('#idShowUrl').val(localStorage.getItem("img"))
        $('#showBirthdate').val(localStorage.getItem("birthdate"));
        $('#showTel').val(localStorage.getItem("tel")); 
        
        if (localStorage.getItem("img") == img) {
            $('#deleteImg').hide();
        };
    }
}
function showSaveProfileData() {

    localStorage.setItem("Name", $('#showUser').val());
    localStorage.setItem("Email", $('#showEmail').val());
    localStorage.setItem("User", $('#showName').val());
    localStorage.setItem("lastName", $('#showLastName').val());
    localStorage.setItem("birthdate", $('#showBirthdate').val());
    localStorage.setItem("tel", $('#showTel').val()); 
    localStorage.setItem("img", $('#idShowUrl').val());
    
}
function dateFormatting() {
    var cleave = new Cleave('.birthdate', {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
    });
}
function validationOnlyNumers(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}
function delAvatarDeafault() {
    localStorage.setItem("img", './img/myProfile/default_avatar.png');
}
 
document.addEventListener("DOMContentLoaded", function (e) {
    
    
    if(localStorage.getItem("Name")) {
        showMyProfileData();
        dateFormatting();
        
        formProfile.onlyNum.addEventListener("keypress", validationOnlyNumers, false);
        
        var showImg = document.getElementById('showImg');
        showImg.onerror = function () {
            this.src = "./img/myProfile/default_avatar.png";
        };
        document.getElementById('btnProfileSave').addEventListener('click', function() {
            
            if ($('#idShowUrl').val() == "" || $('#idShowUrl').val() == " " || $('#idShowUrl').val() == null || $('#idShowUrl').val() == undefined) {
                localStorage.setItem("img", './img/myProfile/default_avatar.png');
                
                //window.alert("jose");
            }
            showSaveProfileData();
        });
        
        
        document.getElementById('deleteImg').addEventListener('click', function(){
            delAvatarDeafault();
            showMyProfileData();
        });
        
        /*(function ($) {
            $(window).on('load', function () {
                let formProfile = document.getElementById('idformProfile');
                $('#showUser, #showEmail, #showName, #showLastName, #showBirthdate, #showTel').on('change keyup', function(e) {
                    if(formProfile.checkValidity() === true) {
                        $('#btnProfileSave').removeClass('isDisabled')
                       
                    }else {
                        $('#btnProfileSave').addClass('isDisabled')
                    };
                });
                $(document).on('click', '#btnProfileSave', function(e) {
                    if(formProfile.checkValidity() === false) {
                        showSaveProfileData();
                       
                    };
                   
                });
            });
        })(jQuery);*/
        
    }  

    
});