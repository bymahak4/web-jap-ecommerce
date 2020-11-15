function showNavegation() {
    document.getElementById("idShowNavegation").innerHTML += `
        <div class="container-fluid">
            <div class="row">
            <div class="col-xl-3 col-lg-2">
                <div class="headerLogo">
                <a href="home.html"><img src="img/logo__small.png" alt=""></a>
                </div>
            </div>
            <div class="col-xl-6 col-lg-7">
                <nav class="headerMenu">
                <ul>
                    <li class="${(actualPath('/home.html')) ? 'active' : ''}"><a href="home.html">Home</a></li>
                    <li class="${(actualPath('/categories.html')) ? 'active' : ''}"><a href="categories.html">Categorias</a>
                    <ul class="dropdown">
                        <li><a href="">Vehículos</a></li>
                        <li><a href="">Juguetes</a></li>
                        <li><a href="">Hogar</a></li>
                        <li><a href="">Herramientas</a></li>
                        <li><a href="">Tecnologias</a></li>
                        <li><a href="">Vestimenta</a></li>
                        <li><a href="">Libros</a></li>
                        <li><a href="">Salud y Belleza</a></li>
                        <li><a href="">Instrumentos Musicales</a></li>
                    </ul>
                    </li>
                    <li class="${(actualPath('/products.html')) ? 'active' : ''}"><a href="products.html">Productos</a></li>
                    <li class="${(actualPath('/sell.html')) ? 'active' : ''}"><a href="sell.html">Vender</a></li>
                    <li class="${(actualPath('/contact.html')) ? 'active' : ''}"><a href="contact.html">Nosotros</a></li>
                </ul>
                </nav>
            </div>
            <div class="col-lg-3">
                <div class="headerRight">
                <div class="headerRightAuth">
                    <ul>
                    <li><span class="icon_profile"> </span><a href="#" id="userMenu"></a>
                        <ul class="dropdown" id="dropdownMenu">
                        <li><a href="cart.html"><span class="icon_bag"></span> Mi carrito
                            <div class="tip" id="numBadge">2</div>
                        </a></li>
                        <li><a href="my-profile.html"><span class="icon_profile"></span> Mis Datos</a></li>
                        <li><a href="historyProduct.html"><span class="icon_document"></span> Historial</a></li>
                        <li class="logOut"><a href="logOut.html"><span class="icon_mug"></span> Salir</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <ul class="headerRightWidget">
                    <li><span class="currencyBox" id="showChangeMoneySpan"></span><span id="changeMoneySpan" class="icon_search"></span></li>
                    <li><a href="#" alt="favoritos">
                    <span class="icon_heart_alt"></span>
                    <div class="tip">1</div>
                    </a></li>
                    <li><span class="far fa-bell"></span></li>
                </ul>
                </div>
            </div>
            </div>
            <div class="canvasOpen">
            <span class="arrow_carrot-left"></span>
            </div>
        </div>
    `
    var userGetName   = localStorage.getItem("Name");
    var userInfoA     = document.getElementById("userMenu");
    
    if (userGetName != null) {
      userInfoA.innerHTML += userGetName;
    }else {
      userInfoA.innerHTML += "Login";
      $('#dropdownMenu').hide();
      document.getElementById('userMenu').addEventListener('click', function(){
        window.location.href = "index.html";
      });
      
    }
     
    /*------------------
        Navigation
    --------------------*/
    $("#userMenu").slicknav({
      prependTo: '#aOffcanvasUser',
      allowParentLinks: true
    });
}

function showOffCanvas() {
    document.getElementById("idShowOffCanvas").innerHTML += `
        <div class="offcanvasClose">+</div>
        <ul class="offcanvasWidget">
        <li><span class="icon_search searchSwitch"></span></li>
        <li><a href=""><span class="icon_heart_alt"></span>
            <div class="tip">2</div>
        </a></li>
        <li><a><span class="far fa-bell"></span>
            <div class="tip">1</div>
        </a></li>
        </ul>
        <div class="offcanvasLogo">
        <a href="home.html"><img src="img/logo__small.png" alt=""></a>
        </div>
        <div id="mobileMenuWrap"></div>
        <div class="offcanvasUser">
        <a href="my-profile.html" id="aOffcanvasUser"></a>
        </div>
    `
}
function actualPath($path) {
    if (window.location.pathname.includes($path)) {
      return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function(e){
    showOffCanvas();
    showNavegation();
});