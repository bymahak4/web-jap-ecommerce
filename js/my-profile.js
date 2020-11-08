function showMyProfileData() {
    if (localStorage.getItem('Name') != null || localStorage.getItem('Name') != undefined) {
        if (localStorage.getItem("Email") != null || localStorage.getItem("Email") != undefined) {
            $('#showUser').val(localStorage.getItem("Name"));
            $('#showEmail').val(localStorage.getItem("Email"));
            $('#showName').val(localStorage.getItem("User"));
            $('#showLastName').val(localStorage.getItem("lastName"));
            //$('#showImg').src(localStorage.getImageUrl("img");
        }else {
            $('#showUser').val(localStorage.getItem("Name"));
            $('#showEmail').val(localStorage.getItem("Email"));
            $('#showName').val(localStorage.getItem("User"));
            $('#showLastName').val(localStorage.getItem("lastName"));
            if (localStorage.getItem("img") != "" || localStorage.getItem("img") != null) {
                $('#idUrlImg').val(localStorage.getItem("img"));
                $('#showImg').attr("src", (localStorage.getItem("img")));
                
            }
            
        }
        $('#showBirthdate').val(localStorage.getItem("birthdate"));
        $('#showTel').val(localStorage.getItem("tel")); 
    }
}
function showSaveProfileData() {

    localStorage.setItem("Name", $('#showUser').val());
    localStorage.setItem("Email", $('#showEmail').val());
    localStorage.setItem("User", $('#showName').val());
    localStorage.setItem("lastName", $('#showLastName').val());
    localStorage.setItem("birthdate", $('#showBirthdate').val());
    localStorage.setItem("tel", $('#showTel').val()); 
    //localStorage.setItem("img", $('#showImg'));
    
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
window.addEventListener("load", function() {
    formProfile.onlyNum.addEventListener("keypress", validationOnlyNumers, false);
});


document.addEventListener("DOMContentLoaded", function (e) {
    
    
    if(localStorage.getItem("Name")) {
        showMyProfileData();
        dateFormatting();
        //uploadIMG();

        document.getElementById('btnProfileSave').addEventListener('click', function() {
            showSaveProfileData();
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