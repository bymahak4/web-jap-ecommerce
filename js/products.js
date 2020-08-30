/*jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj*/

const ORDER_ASC_BY_NAME         = "AZ";
const ORDER_DESC_BY_NAME        = "ZA";
const ORDER_BY_PROD_SOLD_COUNT  = "SoldCount";
const ORDER_BY_PROD_COST_ASC    = "ascPrecio";
const ORDER_BY_PROD_COST_DESC   = "descPrecio";
var currentCategoriesArray      = [];
var currentSortCriteria         = undefined;
var minCount                    = undefined;
var maxCount                    = undefined;
var barraFiltrador              = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME) {
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }

            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST_ASC) {
        result = array.sort(function(a, b) {
            let precioA = parseInt(a.cost);
            let precioB = parseInt(b.cost);

            if ( precioA < precioB ){ return -1; }
            if ( precioA > precioB ){ return 1; }

            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST_DESC) {
        result = array.sort(function(a, b) {
            let precioA = parseInt(a.cost);
            let precioB = parseInt(b.cost);

            if ( precioA > precioB ){ return -1; }
            if ( precioA < precioB ){ return 1; }

            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_SOLD_COUNT) {
        result = array.sort(function(a, b) {
            let soldCountA = parseInt(a.soldCount);
            let soldCountB = parseInt(b.soldCount);

            if ( soldCountA > soldCountB ){ return -1; }
            if ( soldCountA < soldCountB ){ return 1; }

            return 0;
        });
    }

    return result;
}

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let producto            = currentCategoriesArray[i];
        let productoName        = producto.name.toUpperCase();
        let productoDescription = producto.description.toUpperCase();


        if (barraFiltrador != undefined){
            barraFiltrador = barraFiltrador.toUpperCase();
        }

        if((barraFiltrador == undefined) || (productoName.includes(barraFiltrador)) || (productoDescription.includes(barraFiltrador))){
          

            if (((minCount == undefined) || (minCount != undefined && parseInt(producto.cost) >= minCount)) &&
                ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.cost) <= maxCount))){

                htmlContentToAppend += `
                <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ producto.name +`</h4>
                        <small class="text-muted"><b>` + producto.soldCount + ` Vendidos</b></small>
                    </div>
                    <div>
                        <p>`+ producto.description +`</p>
                        <p><b>Precio:</b> US$ ` + producto.cost +`</p>
                    </div>     
                </div>
            </div>
        </div>
        `
            }
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });
  
    document.getElementById("precioAcendent").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COST_ASC);
    });
    
/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/ 

    document.getElementById("precioDecendent").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COST_DESC);
    });

    document.getElementById("sortBySoldCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
    
    document.getElementById("inputSearch").addEventListener("keyup", function(){
        barraFiltrador = document.getElementById("inputSearch").value;

        showCategoriesList();
    })
});
