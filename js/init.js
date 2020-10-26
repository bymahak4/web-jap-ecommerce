const CATEGORIES_URL            = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL       = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL         = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL              = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL          = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL             = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_INFO_URL_CHALLENGE   = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL              = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const COUNTRIES                 = "https://restcountries.eu/rest/v2/all";

var getJSONData = function(url){
    var result = {}; 
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data   = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data   = error;
        return result;
    });
}


  document.addEventListener("DOMContentLoaded", function(e){
    
    var userGetName   = localStorage.getItem("Name");
    var userInfoA     = document.getElementById("userMenu");

    userInfoA.innerHTML += userGetName;
    
    /*------------------
        Navigation
    --------------------*/
    $("#userMenu").slicknav({
      prependTo: '#aOffcanvasUser',
      allowParentLinks: true
    });
   
});


'use strict';

(function ($) {
  $(window).on('load', function () {
    /*------------------
        PreLoad
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    
    /*------------------
        Product filter
    --------------------*/
    $('.filterControls li').on('click', function () {
      $('.filterControls li').removeClass('active');
      $(this).addClass('active');
    });
    if ($('.propertyGallery').length > 0) {
      var containerEl = document.querySelector('.propertyGallery');
      var mixer = mixitup(containerEl);
    }

  });
  
  /*------------------
      Background Set
  --------------------*/
  $('.setBg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });
  
  /*------------------
      Canvas Menu
  --------------------*/
  $(".canvasOpen").on('click', function () {
    $(".offcanvasMenuWrapper").addClass("active");
    $(".offcanvasMenuOverlay").addClass("active");
  });

  $(".offcanvasMenuOverlay, .offcanvasClose").on('click', function () {
      $(".offcanvasMenuWrapper").removeClass("active");
      $(".offcanvasMenuOverlay").removeClass("active");
  });
  
  /*------------------
      Navigation
  --------------------*/
  $(".headerMenu").slicknav({
    prependTo: '#mobileMenuWrap',
    allowParentLinks: true
  });
  
  /*------------------
      Magnific
  --------------------*/
  $('.imagePopup').magnificPopup({
    type: 'image'
  });


})(jQuery);


