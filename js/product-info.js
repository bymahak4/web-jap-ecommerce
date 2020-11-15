comentariosArray            = [];
productoArray               = [];
infoProductoRelArray        = [];
productorelacionadoArray    = [];
const ORDER_DESC_BY_DATE    = "Date";


function mostrarProducto(){
    htmlContentToAppend = `
        <div class="productDetailsText">
            <h3>${productoArray.name}</h3>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <span class="classComment">( 4 Comentarios )</span>
            <div class="productDetailsPrice">${productoArray.currency} ${productoArray.cost}</div>
            <p>${productoArray.soldCount} vendidos</p>
            <ul class="iconHeart">
                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
            </ul>
            <div class="productDetailsButton">
                <div class="quantity">
                    <span>Cantidad:</span>
                    <div class="pro-qty">
                        <input type="text" value="1">
                    </div>
                </div>
                <a href="#" class="cart-btn" onclick="location.href='cart.html'"><span class="icon_bag_alt"></span> Agregar al Carrito</a>               
            </div>
        </div>
              
    `
    for (let i = 0; i < productoArray['images'].length; i++) {
        document.getElementById("img-" + i).src = productoArray['images'][i];
        document.getElementById("carousel-" + i).src = productoArray['images'][i];
    }

    document.getElementById("idDescripcion").innerHTML  = productoArray.description;
    document.getElementById("producto").innerHTML       = htmlContentToAppend;
    
    mostrarProductosRelacionados();
}

function ordenarComentariosFech(criteria){
    let result = [];
    if (criteria === ORDER_DESC_BY_DATE){
        result = comentariosArray.sort(function(a, b) {
            if ( a.dateTime < b.dateTime ){ return -1; }
            if ( a.dateTime > b.dateTime ){ return 1; }
            return 0;
        });
    }
    return result;
}

function mostrarComentarios(){
    htmlContentToAppend = "";
    for(let i = 0; i < comentariosArray.length; i++){
        let preCargaComentarios = comentariosArray[i];

        htmlContentToAppend += `
            <div class="reviewItem">
                <div class="row">
                    <div class="col-12">
                        <h5>${preCargaComentarios.user}<small class="text-muted ml-2">

        `
        for (let i = 1; i <= preCargaComentarios.score ;i++){
            htmlContentToAppend += `<span class="fa fa-star checked estrella"></span>`;
        };
        
        for (let i = preCargaComentarios.score + 1; i <= 5 ;i++){
            htmlContentToAppend += `<span class="fa fa-star unchecked"></span>`;
        }

        htmlContentToAppend += `
                        ${preCargaComentarios.dateTime}</small></h5>
                    </div>
                    <div class="col-12 mt-2">
                        <p>${preCargaComentarios.description}</p>
                    </div>
                </div>
            </div>
        `
    document.getElementById("cargarComentarios").innerHTML = htmlContentToAppend;
    }
}

function addComentario(){
    document.getElementById("agregarComentario").innerHTML = `
    <div class="reviewAddComment">
        <div class="row">
            <div class="col-12 tittleAddComment mb-3">
                <h4>Comenta Que Te Parecio El Producto</h4>
            </div>
            <div class="col-lg-12">
            <textarea type="text" id="comentario" class="form-control" placeholder="Que te parecio el producto..." required></textarea>
            <div class="d-flex justify-content-center">
                <div id="rating">
                    <fieldset class="rating" style="float:left">
                        <input type="radio" id="5" name="rating"><label class="fa fa-star" for="5"></label>
                        <input type="radio" id="4" name="rating"><label class="fa fa-star" for="4"></label>
                        <input type="radio" id="3" name="rating"><label class="fa fa-star" for="3"></label>
                        <input type="radio" id="2" name="rating"><label class="fa fa-star" for="2"></label>
                        <input type="radio" id="1" name="rating"><label class="fa fa-star" for="1"></label>
                    </fieldset>
                </div>
                    </div>
            </div>
            <button class="site-btn" id="comentar">Comentar</button>
        </div>
    </div>
    `
    document.getElementById("agregarComentario").style="display:block";
}

function limpiarCamposDeComentar(){
    if(localStorage.getItem('Name')){
        $('input[name=rating]').prop('checked',false)
    }
    document.getElementById('comentario').value = ""; 
}

function mostrarProductosRelacionados(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProductoRelArray = resultObj.data;
            productoArray.relatedProducts.forEach(function(id) {
                document.getElementById("productoRelacionado").innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="productItem">
                        <div class="productItemPic setBg" data-setbg="${infoProductoRelArray[id].imgSrc}" style="background-image: url(${infoProductoRelArray[id].imgSrc});">
                            <ul class="productHover">
                                <li><a href="${infoProductoRelArray[id].imgSrc}" class="imagePopup" alt="${infoProductoRelArray[id].description}"><span class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="productItemText">
                            <h6><a href="product-info.html">${infoProductoRelArray[id].name}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="productPrice">${infoProductoRelArray[id].cost}${infoProductoRelArray[id].currency}</div>
                        </div>
                    </div>
                </div>
                `
            });
            
        }
    });
}

document.addEventListener("DOMContentLoaded", function(e){

    
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            comentariosArray = resultObj.data;
            ordenarComentarios(ORDER_DESC_BY_DATE);
        }
    });

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productoArray = resultObj.data;
            mostrarProducto();
        }
    });

    function ordenarComentarios(sortCriteria){
        comentariosArray = ordenarComentariosFech(sortCriteria);
        mostrarComentarios();
    }

    if(localStorage.getItem("Name")){
        addComentario();

        document.getElementById('comentar').addEventListener('click', function(){
        
            if(!document.getElementById('comentario').value){
                alert("Debe llenar los campos para poder Comentar");
                return false;
            }
            
            if(localStorage.getItem("Name")){
                let now = new Date()
                let dateTime = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    
    
                if(!$("#rating :radio:checked")[0]){
                    alert("Debe puntuar");
                    return false;
                }
        
                var score = parseInt($("#rating :radio:checked")[0].id);
    
                if(score > 5){
                    score = 5;
                }
                
                let addNuevoComentario = {
                    user: localStorage.getItem('Name'),
                    score: score,
                    description: document.getElementById('comentario').value,
                    dateTime: dateTime
                }
                
                comentariosArray.push(addNuevoComentario);
                mostrarComentarios();
                limpiarCamposDeComentar();
        
            } 
        });
        
        /*--------------------------
            Product Details Slider
        ----------------------------*/
        $(".productDetailsPicSlider").owlCarousel({
            loop: false,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: false,
            mouseDrag: false,
            startPosition: 'URLHash'
        }).on('changed.owl.carousel', function(event) {
            var indexNum = event.item.index + 1;
            productThumbs(indexNum);
        });
    
        function productThumbs (num) {
            var thumbs = document.querySelectorAll('.productThumb a');
            thumbs.forEach(function (e) {
                e.classList.remove("active");
                if(e.hash.split("-")[1] == num) {
                    e.classList.add("active");
                }
            })
        }
    
        /*------------------
            Single Product
        --------------------*/
        $('.productThumb .pt').on('click', function(){
        var imgurl = $(this).data('imgBigUrl');
        var bigImg = $('.productBigImg').attr('src');
          if(imgurl != bigImg) {
            $('.productBigImg').attr({src: imgurl});
          }
        }); 
    
    };
    


});