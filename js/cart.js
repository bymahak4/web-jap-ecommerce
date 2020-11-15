articlesArray = [];
var cardType = null;

function iconChange() {
    $('#changeMoneySpan').removeClass("icon_search").addClass("fas fa-hand-holding-usd");
}
function disableDiscountCoupon(){
   
    document.getElementById('inputDiscount').value="";
    document.getElementById('inputDiscount').setAttribute("readonly", "");
    document.getElementById('inputDiscount').setAttribute("placeholder", "Canjeado");
    document.getElementById('btnDiscount').setAttribute("disabled","true");
}
function precioanterior() {
    
    //document.getElementById('discountApplicated').innerText = "Precio anterior";
    //document.getElementById('beforeApplying').innerHTML = document.getElementById('totalToPay').innerHTML;
    $('#currencyDiscountApplicated').append("UYU");
    $('#beforeApplying').append(document.getElementById('totalToPay').innerHTML);
    $('#discountApplicated').append("Precio anterior");
    //console.log(document.getElementById('totalToPay').innerHTML);
    
}
function discount(){
    
    document.getElementById('btnDiscount').addEventListener('click', function(){
        var cpDiscount = document.getElementById('inputDiscount').value;
        var resFive;
        if(cpDiscount == "sale" || cpDiscount == "descuento" || cpDiscount == "blackfriday") {
            var five = 5; document.getElementById('couponDiscount').innerHTML = "5%"
            resFive = ((document.getElementById('totalToPay').innerHTML * Number(five))/100).toFixed(2);
            precioanterior();
            document.getElementById('totalToPay').innerHTML = (document.getElementById('totalToPay').innerHTML - Number(resFive)).toFixed(2);
            disableDiscountCoupon();
        }else if(cpDiscount == "bug"){
            var bug = 99; document.getElementById('couponDiscount').innerHTML = "99%"
            resFive = ((document.getElementById('totalToPay').innerHTML * Number(bug))/100).toFixed(2);
            precioanterior();
            document.getElementById('totalToPay').innerHTML = (document.getElementById('totalToPay').innerHTML - Number(resFive)).toFixed(2);
            disableDiscountCoupon();
        }else{
            window.alert("cupon invalido");
        }
        
    });
}
function totalCalcCart(){
    var iva = 22;
    var resIva = 0;
    document.getElementById('numBadge').innerHTML   =  document.getElementById('cant').value;
    document.getElementById('subTotal').innerHTML   = Number(document.getElementById('costTotal').innerHTML).toFixed(2);
    document.getElementById('iva').innerHTML        = "22%";
    resIva = ((document.getElementById('subTotal').innerHTML * iva)/100).toFixed(2);
    document.getElementById('totalToPay').innerHTML = ((Number(document.getElementById('subTotal').innerHTML) + Number(resIva)) - Number(document.getElementById('couponDiscount').innerHTML)).toFixed(2);   
    OpShipping();
    document.getElementById('totalToPay').innerHTML = (Number(document.getElementById('totalToPay').innerHTML) + (Number(document.getElementById('shippingType').innerHTML) * Number(document.getElementById('subTotal').innerHTML))/100).toFixed(2);
    //console.log(document.getElementById('totalToPay').innerHTML);
}
function restOPShipping() {
    document.getElementById('totalToPay').innerHTML = (Number(document.getElementById('totalToPay').innerHTML) - (Number(document.getElementById('shippingType').innerHTML) * Number(document.getElementById('subTotal').innerHTML))/100).toFixed(2);
}
function calcShipping() {
    var prueba                                          = ((Number(document.getElementById('subTotal').innerHTML) * Number(document.querySelector('input[name="opShipping"]:checked').value))/100).toFixed(2);
    document.getElementById('totalToPay').innerHTML     = (Number(document.getElementById('totalToPay').innerHTML) + Number(prueba)).toFixed(2);
}
function OpShipping() {
   
    if(document.querySelector('input[name="opShipping"]:checked').value == "5") {
        restOPShipping();  
        document.getElementById('shippingType').innerHTML   = "5"; document.getElementById('percenShipping').innerHTML = "%";
        calcShipping();
    } else if(document.querySelector('input[name="opShipping"]:checked').value == "7") {
        restOPShipping();
        document.getElementById('shippingType').innerHTML   = "7"; document.getElementById('percenShipping').innerHTML = "%";  
        calcShipping();
    } else {
        restOPShipping();
        document.getElementById('shippingType').innerHTML   = "15"; document.getElementById('percenShipping').innerHTML = "%";
        calcShipping();
    }
}
function showMoney() {
    
    var money = document.getElementById('showChangeMoneySpan').innerHTML; 
    document.getElementById('currencySubTotal').innerHTML = money;
    document.getElementById('currencyTotal').innerHTML = money;    
}
function multiMoneyUSD(){
    showMoney();
    
    document.getElementById('costUnit').innerHTML   = (Number(document.getElementById('costUnit').innerHTML) / 40).toFixed(2);
    document.getElementById('costTotal').innerHTML  = (Number(document.getElementById('costTotal').innerHTML) / 40).toFixed(2);
    document.getElementById('subTotal').innerHTML   = (Number(document.getElementById('costTotal').innerHTML)).toFixed(2);  
    
    totalCalcCart();
}
function divMoneyUSD(){
    showMoney();
    
    document.getElementById('costUnit').innerHTML   = Math.ceil(Number(document.getElementById('costUnit').innerHTML).toFixed(2) * 40);
    document.getElementById('costTotal').innerHTML  = Math.round(Number(document.getElementById('costTotal').innerHTML) * 40).toFixed(2);
    document.getElementById('subTotal').innerHTML   =  Number(document.getElementById('costTotal').innerHTML).toFixed(2);
    
    totalCalcCart();
}
function showArticles() {
        
        document.getElementById('name').innerHTML       = articlesArray.articles[0].name;
        document.getElementById('img-0').src            = articlesArray.articles[0].src;
        document.getElementById('costUnit').innerHTML   = articlesArray.articles[0].unitCost;
        document.getElementById('cant').value           = articlesArray.articles[0].count;
        document.getElementById('costTotal').innerHTML  = (articlesArray.articles[0].count * articlesArray.articles[0].unitCost).toFixed(2);
        
        document.getElementById('showChangeMoneySpan').innerHTML = articlesArray.articles[0].currency;
        showMoney();
        totalCalcCart();
                      
}
function delArticleCart(index) {
    $("#trFila" + index).remove(); 
}
function emptyBoxCart() {
    disableDiscountCoupon();
    document.getElementById('inputDiscount').setAttribute("placeholder", "No hay articulos");
    document.getElementById('btnDiscount').style.textDecoration = "line-through";
    removeEmptyCart(); 
}
function removeEmptyCart() {
    
    document.querySelector('input[name="opShipping"]:checked').removeAttribute("checked");
    $('input[type="radio"]').prop('disabled', true);

    document.getElementById('numBadge').remove();
    document.getElementById('currencySubTotal').remove();
    document.getElementById('percenShipping').remove();
    document.getElementById('currencyTotal').remove();

    $("#subTotal").empty();
    $("#iva").empty();
    $("#shippingType").empty();
    $("#couponDiscount").empty();
    $("#totalToPay").empty();
    $("#discountApplicated").empty();

    document.getElementById('btnBuy').removeAttribute("href");
    document.getElementById('btnBuy').style.textDecoration = "line-through";
    document.getElementById('btnBuy').style.color = "#ffffff";
    
    $("#listCountries").val('').prop('disabled', true);
    $("#idDir").val('').prop('disabled', true);
    $("#idNum").val('').prop('disabled', true);
    
}
function rmodal() {
    var cleave = new Cleave('.input-element', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            // update UI ...
        }
    });
}
function detectedSelectedCard() {
    new Cleave('.cardNumber', {
        creditCard: true,
        delimiter: '-',
        onCreditCardTypeChanged: function (type) {
            if (type === 'visa') {
                $('.fa-cc-visa').addClass('active');
                $('.fa-cc-mastercard,.fa-cc-amex,.fa-cc-diners-club,.fa-cc-jcb,.fa-cc-discover').removeClass('active');
                cardType = "visa";
            } else if (type === 'mastercard') {
                $('.fa-cc-mastercard').addClass('active');
                $('.fa-cc-visa,.fa-cc-amex,.fa-cc-diners-club,.fa-cc-jcb,.fa-cc-discover').removeClass('active');
                cardType = "mastercard";
            } else if (type === 'amex') {
                $('.fa-cc-amex').addClass('active');
                $('.fa-cc-mastercard,.fa-cc-visa,.fa-cc-diners-club,.fa-cc-jcb,.fa-cc-discover').removeClass('active');
                cardType = "amex";
            } else if (type === 'diners') {
                $('.fa-cc-diners-club').addClass('active');
                $('.fa-cc-mastercard,.fa-cc-amex,.fa-cc-visa,.fa-cc-jcb,.fa-cc-discover').removeClass('active');
                cardType = "diners";
            } else if (type === 'jcb') {
                $('.fa-cc-jcb').addClass('active');
                $('.fa-cc-mastercard,.fa-cc-amex,.fa-cc-diners-club,.fa-cc-visa,.fa-cc-discover').removeClass('active');
                cardType = "jcb";
            } else if (type === 'discover') {
                $('.fa-cc-discover').addClass('active');
                $('.fa-cc-mastercard,.fa-cc-amex,.fa-cc-diners-club,.fa-cc-jcb,.fa-cc-visa').removeClass('active');
                cardType = "discover";
            } else {
                $('.fa-cc-visa,.fa-cc-mastercard,.fa-cc-amex,.fa-cc-diners-club,.fa-cc-jcb,.fa-cc-discover').removeClass('active');
                cardType = null;
            };
        }
    });
}
function checkCardPaymentMethod() {
    if (cardType == 'visa' ||  cardType == 'mastercard' ||  cardType == 'jcb' || cardType == 'discover') {
        $('#cardNumber').attr('pattern', '[0-9-]{19}');
    } else if (cardType == 'diners') {
        $('#cardNumber').attr('pattern', '[0-9-]{16}');
    } else if (cardType == 'amex') {
        $('#cardNumber').attr('pattern', '[0-9-]{17}');
    } else {
        $('#cardNumber').attr('pattern', '[0-9-]{30}');
    };
}
function validatioModal() {
    $('#cardNumber').on('change keyup',function(e){
        checkCardPaymentMethod();
    });
}
function checkFechExpired () {
    new Cleave('.fechExpiry', {
        date: true,
        datePattern: ['m', 'y']
    });
}
function validationOnlyNumers(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}
window.addEventListener("load", function() {
    formInfo.onlyNum.addEventListener("keypress", validationOnlyNumers, false);
});

    
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            articlesArray = resultObj.data;
            showArticles();
        }
    });
    getJSONData(COUNTRIES).then(function (resultObj) {
        if (resultObj.status === "ok") {
            resultObj.data.forEach(country => {
                document.getElementById('listCountries').innerHTML += `
                    <option value="${country.name}">${country.name}</option>
                `
            });
        }
    });

    if(localStorage.getItem("Name")){ 
        iconChange();
        discount();  
        detectedSelectedCard();
        validatioModal();
        checkFechExpired();
        document.getElementById('decrease').addEventListener('click', function(){
                
            if(document.getElementById('cant').value >= 2){
                
                document.getElementById('cant').value           = parseInt(document.getElementById('cant').value)-1;
                document.getElementById('cant').value           = document.getElementById('cant').value;
                document.getElementById('costTotal').innerHTML  = (Number(document.getElementById('costUnit').innerHTML) * Number(document.getElementById('cant').value)).toFixed(2);
                
                totalCalcCart();
              
            }if(document.getElementById('cant').value <= 1) { 
                
                totalCalcCart();        
            }     
        });               
        document.getElementById('increase').addEventListener('click', function(){
               
            document.getElementById('cant').value           = parseInt(document.getElementById('cant').value)+1;
            document.getElementById('cant').value           = document.getElementById('cant').value;
            document.getElementById('costTotal').innerHTML  = (Number(document.getElementById('costUnit').innerHTML) * Number(document.getElementById('cant').value)).toFixed(2);
            
            totalCalcCart();             
        });      
        document.getElementById('opPremium').addEventListener('change', function(){    
            OpShipping();
        });
        document.getElementById('opExpress').addEventListener('change', function(){
            OpShipping();
        });
        document.getElementById('opEstandar').addEventListener('change', function(){
            OpShipping();
        });  
        document.getElementById('changeMoneySpan').addEventListener('click', function(){
            if(document.getElementById('showChangeMoneySpan').innerHTML == "UYU"){
                document.getElementById('showChangeMoneySpan').innerHTML = "U$D";
                multiMoneyUSD();
            }else {
                document.getElementById('showChangeMoneySpan').innerHTML = "UYU";
                divMoneyUSD();
            }
        });       
        document.getElementById('deleteArticles').addEventListener('click', function(){
            delArticleCart(0);
            emptyBoxCart();
        });       
        document.getElementById('btnAccordion1').addEventListener('click', function(){
            $('#numBank').val("");
            $('#btnAccountCar').addClass("isDisabled");
            //$('#cardNumber').empty();
        });
        document.getElementById('btnAccordion2').addEventListener('click', function(){
            $('#cardNumber').val("");
            //$('#cardNumber').empty();
            $('#cvcNumber').val("");
            //$('#cvcNumber').empty();
            $('#fechExpiry').val("");
            //$('#fechExpiry').empty();
            $('#btnBuyOnlyCar').addClass("isDisabled");
        });
        

        (function ($) {
        $(window).on('load', function () {
            
            
            /*------------------
              Magnific Modal
            --------------------*/
            let formShipping = document.getElementById('idFormShipping');
            $('#idNum, #idDir, #listCountries').on('change keyup', function(e){
              if (formShipping.checkValidity() === true) {
                $('#btnBuy').removeClass('isDisabled')
              }else {
                $('#btnBuy').addClass('isDisabled')
              };
            });
            
            $(document).on('click', '#btnBuy', function (e) {
                if (formShipping.checkValidity() === false) {
                    console.log("hola buenas tardes");
                    e.preventDefault();
                    $.magnificPopup.close();
                };
            });
            
            let buyAccCar = document.getElementById('idFormCarBank');
            $('#numBank').on('change keyup', function(e) {
                if(buyAccCar.checkValidity() === true) {
                    $('#btnAccountCar').removeClass('isDisabled')
                }else {
                    $('#btnAccountCar').addClass('isDisabled')
                };
            });
            
            $(document).on('click', '#btnAccountCar', function(e) {
                if(buyAccCar.checkValidity() === false) {
                    e.preventDefault();
                };
            });

            let buyCartTar = document.getElementById('idFormCar');
            $('#cardNumber, #cvcNumber, #fechExpiry').on('change keyup', function(e) {
                if(buyCartTar.checkValidity() === true) {
                    $('#btnBuyOnlyCar').removeClass('isDisabled')
                }else {
                    $('#btnBuyOnlyCar').addClass('isDisabled')
                };
            });

            $(document).on('click', '#btnBuyOnlyCar', function(e) {
                if(buyCartTar.checkValidity() === false) {
                    e.preventDefault();
                };
            });
        });
            /*------------------
            Magnific Modal
            --------------------*/
          $(function () {
            $('.popup-modal').magnificPopup({
              type: 'inline',
              preloader: false,
              focus: '#username',
              modal: true
            });
            
            $(document).on('click', '.popup-modal-dismiss', function (e) {
              e.preventDefault();
              $.magnificPopup.close();
            });
          });

          

        })(jQuery);
    }
        

});
