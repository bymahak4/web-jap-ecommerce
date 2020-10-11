articlesArray = [];

function disableDiscountCoupon(){
   
    document.getElementById('inputDiscount').value="";
    document.getElementById('inputDiscount').setAttribute("readonly", "");
    document.getElementById('inputDiscount').setAttribute("placeholder", "Canjeado");
    document.getElementById('btnDiscount').setAttribute("disabled","true");
}
function discount(){
    
    document.getElementById('btnDiscount').addEventListener('click', function(){
        var cpDiscount = document.getElementById('inputDiscount').value;
        if(cpDiscount == "sale" || cpDiscount == "descuento" || cpDiscount == "blackfriday") {
            document.getElementById('couponDiscount').innerHTML = ((document.getElementById('totalToPay').innerHTML * 5)/100).toFixed(2);
            document.getElementById('totalToPay').innerHTML = (document.getElementById('totalToPay').innerHTML - document.getElementById('couponDiscount').innerHTML).toFixed(2);
            disableDiscountCoupon();
        }else if(cpDiscount == "bug"){
            document.getElementById('couponDiscount').innerHTML = ((document.getElementById('totalToPay').innerHTML * 99)/100).toFixed(2);
            document.getElementById('totalToPay').innerHTML = (document.getElementById('totalToPay').innerHTML - document.getElementById('couponDiscount').innerHTML).toFixed(2);
            disableDiscountCoupon();
        }else{
            window.alert("cupon invalido");
        }
        
    });
}
function totalCalcCart(){
    document.getElementById('numBadge').innerHTML   =  document.getElementById('cant').value;
    document.getElementById('subTotal').innerHTML   = Number(document.getElementById('costTotal').innerHTML).toFixed(2);
    document.getElementById('iva').innerHTML        = ((document.getElementById('subTotal').innerHTML * 22)/100).toFixed(2);
    document.getElementById('totalToPay').innerHTML = ((Number(document.getElementById('subTotal').innerHTML) + Number(document.getElementById('iva').innerHTML) + Number(document.getElementById('shippingType').innerHTML)) - Number(document.getElementById('couponDiscount').innerHTML)).toFixed(2);   
    OpShipping();
}
function OpShipping() {
    if(document.querySelector('input[name="opShipping"]:checked').value) {
        document.getElementById('totalToPay').innerHTML     = (Number(document.getElementById('totalToPay').innerHTML) - Number(document.getElementById('shippingType').innerHTML));    
        document.getElementById('shippingType').innerHTML   = ((Number(document.getElementById('subTotal').innerHTML) * Number(document.querySelector('input[name="opShipping"]:checked').value))/100).toFixed(2);
        document.getElementById('totalToPay').innerHTML     = (Number(document.getElementById('totalToPay').innerHTML) + Number(document.getElementById('shippingType').innerHTML)).toFixed(2);
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


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            articlesArray = resultObj.data;
            showArticles();
        }
    });
    
    if(localStorage.getItem("Name")){
        
        discount();
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
    }
        

});