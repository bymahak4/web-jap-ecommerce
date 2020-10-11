comentariosArray            = [];
productoArray               = [];
infoProductoRelArray        = [];
productorelacionadoArray    = [];
const ORDER_DESC_BY_DATE    = "Date";


function mostrarProducto(){
    htmlContentToAppend = `
            <div class="mt-3">
                <hr style="width: 95%;">
                <div class="col-12">
                    <h5><b>Descripcion:</b></h5>
                    <h6>${productoArray.description}</h6>
                </div>
                <hr style="width: 95%;">
                <div class="col-12 justify-aling">
                    <h5>Precio: <b>${productoArray.currency} ${productoArray.cost}</b></h5>
                    <h5>${productoArray.soldCount} vendidos</h5>
                    <div><button class="btn waves-effect purple lighten-2" id="jaimito" onclick="location.href='cart.html'">Añadir al carrito</button></div>
                </div>
                <br>              
            </div>     
        </a>
    `
    document.getElementById("img-0").src = productoArray['images'][0];
    document.getElementById("img-1").src = productoArray['images'][1];
    document.getElementById("img-2").src = productoArray['images'][2];
    document.getElementById("img-3").src = productoArray['images'][3];
    document.getElementById("img-4").src = productoArray['images'][4];

    document.getElementById("nombreAuto").innerHTML = productoArray.name;
    document.getElementById("producto").innerHTML   = htmlContentToAppend;

    mostrarProductosRelacionados()
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
        <div class="list-group-item list-group-item">
                <div class="row">
                    <div class="col-12">
                        <h7 class="ml-2"><b>${preCargaComentarios.user}</b></h7><small class="text-muted ml-2">
                    
        `
        for (let i = 1; i <= preCargaComentarios.score ;i++){
            htmlContentToAppend += `<span class="fa fa-star checked estrella"></span>`;
        };

        for (let i = preCargaComentarios.score + 1; i <= 5 ;i++){
            htmlContentToAppend += `<span class="fa fa-star unchecked"></span>`;
        }

        htmlContentToAppend += 
        `
                        ${preCargaComentarios.dateTime}</small>              
                    </div>
                    <div class="col-12">
                        <p class="ml-4 pl-5 col-12">${preCargaComentarios.description}</p>
                    </div>
                </div>
        </div>
        `
    document.getElementById("cargarComentarios").innerHTML = htmlContentToAppend;
    }
}

//Mejorar udemy full js seccion 8
function addComentario(){
    document.getElementById("agregarComentario").innerHTML = `
    <div class="list-group-item ">
        <div class="row">
          <h2>Dejanos tu comentario</h2>
              <textarea type="text" id="comentario" class="form-control" placeholder="Que te parecio el producto..." required></textarea>
              <hr style="width: 95%;">
              <div class="col-12 d-flex justify-content-between align-items-center">
              <div id="rating">
                <fieldset class="rating" style="float:left">
                  <legend>Valoracion</legend>
                  <input type="radio" id="5" name="rating"><label class="fa fa-star" for="5"></label>
                  <input type="radio" id="4" name="rating"><label class="fa fa-star" for="4"></label>
                  <input type="radio" id="3" name="rating"><label class="fa fa-star" for="3"></label>
                  <input type="radio" id="2" name="rating"><label class="fa fa-star" for="2"></label>
                  <input type="radio" id="1" name="rating"><label class="fa fa-star" for="1"></label>
                </fieldset>
              </div>
              <div><button class="btn btn-lg btn-primary btn-block purple lighten-2" id="comentar">Enviar</button></div> 
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
                <a href="product-info.html" class="d-flex list-group-item justify-content-center list-group-item-action">
                    <div class="col-3">
                        <img src="${infoProductoRelArray[id].imgSrc}" alt="${infoProductoRelArray[id].description}" class="img-thumbnail">  
                    </div>  
                    <div>
                    <h4 class="mb-1 text-center">${infoProductoRelArray[id].name}</h4>
                        <p class="text-center">${infoProductoRelArray[id].cost}${infoProductoRelArray[id].currency}</p>
                    </div>
                </a>
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
                alert("Debe llenar los campos para publicar el comentario");
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
    };
    

    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:   10,
        diat:       -80,
        shift:      5,
        padding:    2,
        numVisible: 3,
        indicators: true,
        noWrap:     false
    });

});