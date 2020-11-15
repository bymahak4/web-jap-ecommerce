function showInstagram() {
    document.getElementById("idShowInstagram").innerHTML += `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_4.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnMGRiDP2J/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_3.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnMHzLjH4g/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_9.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnL5qYjI8d/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_13.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnMEW7DLZx/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_10.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnL-kBD-Wj/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagramItem setBg" data-setbg="img/instagram/ig_8.jpg">
                        <div class="instagramText">
                            <i class="fab fa-instagram"></i>
                            <a href="https://www.instagram.com/p/CFnMC9gjmlJ/" target="_blank">@ emercadojap</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}


document.addEventListener("DOMContentLoaded", function(e){
    showInstagram();
});