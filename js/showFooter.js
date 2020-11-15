function showFooter(){
    document.getElementById("idShowFooter").innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <div class="footerAbout">
                        <div class="footerLogo">
                            <a href="home.html"><img src="img/logo__small.png" alt=""></a>
                        </div>
                        <p>Somos la empresa lider en compras online con buena reputacion a nivel nacional. 
                            e-Mercado cuenta con los certificados verificados para garantizar 
                            la seguridad de la compra.</p>
                        <div class="footerPayment">
                        <a><img src="img/methodPayments/cards.png" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-5">
                    <div class="footerWidget">
                        <h6>Informacion</h6>
                        <ul>
                            <li><a href="contact.html">Nosotros</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html#contact">Contacto</a></li>
                            <li><a href="e-Mercado_doc/helpFAQ.html">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <div class="footerWidget">
                        <h6>Cuenta</h6>
                        <ul>
                            <li><a href="my-profile.html">Mi Cuenta</a></li>
                            <li><a href="followProducts.html">Favoritos</a></li>
                            <li><a href="cart.html">Mi Carrito</a></li>
                            <li><a href="ordersTracking.html">Seguimiento</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-8">
                    <div class="footerNewsLatter">
                        <h6>Regístrate a nuestro Newsletter</h6>
                        <form action="#">
                            <input type="text" placeholder="Email">
                            <button type="submit" class="site-btn">Subscribe</button>
                        </form>
                        <div class="footerSocial">
                            <a href="https://www.facebook.com/E-Mercado_JaP-108587171003909/?modal=admin_todo_tour" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/eMercadoJaP1" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UCdZk8pVmlpY9-Wp2Yan3PXQ?view_as=subscriber" target="_blank"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/emercadojap/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.pinterest.com/emercadojap/_saved/" target="_blank"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footerCopyrightText">
                    <p>Este sitio forma parte de Desarrollo Web - JAP 2020 | Clickea <a target="_blank" href="Letra.pdf">aquí</a> para descargar la letra del obligatorio.</p>
                    <p>Copyright &copy; <span id="year"></span> Todos los derechos reservados | Jovenes A Programar</p>
                    </div>
                </div>
            </div>
        </div> 
    `
    showYear();
}
function showYear() {
    const YEAR = new Date().getFullYear();
    $('#year').append(YEAR);
}


document.addEventListener("DOMContentLoaded", function(e){
    showFooter();
});
