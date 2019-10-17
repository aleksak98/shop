var articleCategory=[
    {
        id:1125,
        name:'Hrana',
        podcategory:[
            {
                id:11285,
                name:'Voce'
            },
            {
                id:232,
                name:'Povrce'
            }
        ]
    },
    {
        id:1126,
        name:'Pice',
        podcategory: [
            {
                id:11286,
                name:'Voda'
            },
            {
                id:11287,
                name:'Sok'
            }
        ]
    }
];

var article = [
    {
        id: 1,
        name:'Ananas',
        price: [100,60],
        type: articleCategory[0].podcategory[0].id,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/ananas.jpg',
        url: 'proizvod/ananas.html'
    },
    {
        id: 2,
        name:'Salata',
        price: [170,50],
        type: articleCategory[0].podcategory[1].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/7433f9ef76528311525cb2a341713f46_view_l.jpg',
        url: 'proizvod/salata.html'
    },
    {
        id: 3,
        name:'Orah',
        price:[35,20],
        type: articleCategory[0].podcategory[0].id,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stanje: true,
        image:'img/orah-300x300.jpg',
        url: 'proizvod/orah.html'
    }
];

// console.log(article);

var maloprodajaPDV = 1.2;
var veleprodajaPDV = 0.8;
var ispisArtikla = document.getElementById('firstsection');

function pricePDV(price,maloprPDV,veleprPDV){
    var racunSaPDV = [];
    for(var j = 0;j<price.length;j++){
        if(j == 0){
            racunSaPDV[j] = price[j] * maloprPDV;
            // console.log('Maloprodajna cena sa PDV je: ' + price[j]);
        }else{
            racunSaPDV[j] = price[j] * veleprPDV;
            // console.log('Veleprodajna cena sa PDV je: ' + price[j]);
        }
    }
    return racunSaPDV;
}

function compare(a,b){
    if(a.RacunSaPDV[0]>b.RacunSaPDV[0]){
        return -1;
    }else{
        return 1;
    }
}

function searchExpand(id){
    var x =document.getElementById(id);
    x.style.width='650px';
    x.style.marginLeft='-235px';
    x.placeholder = 'Search for a designer or category';
    x.style.transitionDelay = '0.1s';
    x.style.transitionDuration = '0.5s';
}


function writeElement(i,j,k){
    ispisArtikla.innerHTML += '<div id='+article[i].id+' class="article" >' +
        '<img src='+article[i].image+'>' +
        '<h2>'+article[i].name+'</h2>' +
        '<h4>'+'('+articleCategory[j].name+', '+articleCategory[j].podcategory[k].name+')'+'</h4>'+
        '<p class="description">'+article[i].description+'</p>' +
        '<p class="price">'+article[i].RacunSaPDV[0]+'</p>' +
        '<a href='+article[i].url+' target="_blank" >Saznaj vise</a>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#m'+ article[i].id+'" >More</button>' +
        '</div>'+
        '<div class="modal fade" id="m'+ article[i].id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
        '        <div class="modal-dialog" role="document">\n' +
        '            <div class="modal-content">\n' +
        '                <div class="modal-header">\n' +
        '                    <h5 class="modal-title" id="exampleModalLabel">'+ article[i].name+'</h5>\n' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '                        <span aria-hidden="true">&times;</span>\n' +
        '                    </button>\n' +
        '                </div>\n' +
        '                <div class="modal-body">\n' +
        '                    '+ articleCategory[j].podcategory[k].name+'\n' + '<br>'+
        '                    '+ article[i].description+'\n' + '<br>'+
        '                    '+ article[i].RacunSaPDV[0]+'\n' +
        '                </div>\n' +
        '                <div class="modal-footer">\n' +
        '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
        '                    <button type="button" class="btn btn-primary">Save changes</button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}


function getPriceRate() {
    var x = document.getElementById('do100').value;
    x = document.getElementById('do100').checked;
    var y = document.getElementById('od100do200').value;
    y = document.getElementById('od100do200').checked;
    var z = document.getElementById('preko200').value;
    z = document.getElementById('preko200').checked;

    ispisArtikla.innerHTML = '';
    for (var i = 0; i < article.length; i++) {
        for (var j = 0; j < articleCategory.length; j++) {
            for (var k = 0; k < articleCategory[j].podcategory.length; k++) {
                if (article[i].type == articleCategory[j].podcategory[k].id) {
                    if (article[i].stanje) {
                        if (x && article[i].RacunSaPDV[0] < 100) {
                            writeElement(i, j,k);
                        } else if (y && article[i].RacunSaPDV[0] >= 100 && article[i].RacunSaPDV[0] < 200) {
                            writeElement(i, j,k);
                        } else if (z && article[i].RacunSaPDV[0] >= 200) {
                            writeElement(i, j,k);
                        }
                    }
                }
            }
        }
    }
}

function getType() {
    var x = document.getElementById('voce').checked;
    var z = document.getElementById('povrce').checked;

    ispisArtikla.innerHTML = '';
    for (var i = 0; i < article.length; i++) {
        for (var j = 0; j < articleCategory.length; j++) {
            for (var k = 0; k < articleCategory[j].podcategory.length; k++) {
                if (article[i].type === articleCategory[j].podcategory[k].id) {
                    if (x && article[i].type == 11285) {
                        writeElement(i, j,k);
                    } else if (z && article[i].type == 232) {
                        writeElement(i, j,k);
                    }
                }
            }
        }
    }
}

for(var i=0;i<article.length;i++) {
    article[i].RacunSaPDV = pricePDV(article[i].price, maloprodajaPDV, veleprodajaPDV);
}

for(var i =0;i<article.length;i++){
    for(var j =0;j<articleCategory.length;j++){
        for(var k=0;k<articleCategory[j].podcategory.length;k++) {
            if(article[i].type == articleCategory[j].podcategory[k].id){
                writeElement(i,j,k);
            }
        }
    }
}

function searchHide(id){
    var y = document.getElementById(id);
    y.style.height = '35px';
    y.style.width = '250px';
    y.style.transitionDelay = '0.1s';
    y.style.transitionDuration = '0.5s';
    y.placeholder = 'Search';
    y.style.marginLeft =  '166px';
    y.style.marginTop =  '-9px';
}

function sortByPrice() {
    ispisArtikla.innerHTML='';
    article.sort(compare);
    for(var i =0;i<article.length;i++){
        for(var j =0;j<articleCategory.length;j++){
            for(var k=0;k<articleCategory[j].podcategory.length;k++) {
                if(article[i].type == articleCategory[j].podcategory[k].id){
                    writeElement(i,j,k);
                }
            }
        }
    }
}

function getArticle() {
    var productName = document.getElementById('productName').value;
    var maloprodajnaCena = document.getElementById('maloprodajnaCena').value;
    var veleprodajnaCena = document.getElementById('veleprodajnaCena').value;
    var select = document.getElementById('select');
    var select2 = document.getElementById('select2');
    // var voce = select.options[1].value;
    // var povrce = select.options[2].value;
    var opis = document.getElementById('opis').value;
    var imaNaStanju = document.getElementById('imaNaStanju').checked;
    var nemaNaStanju = document.getElementById('nemaNaStanju').checked;
    var urlAdresa = document.getElementById('urlAdresa').value;

    var newArticle = new Object();
    newArticle.id = article.length + 1;
    newArticle.name = productName;
    newArticle.price = new Array();
    newArticle.RacunSaPDV = new Array();
    newArticle.price[0] = parseInt(maloprodajnaCena);
    newArticle.price[1] = parseInt(veleprodajnaCena);


    if (select.options[select.selectedIndex].value == articleCategory[0].id) {
        newArticle.type = parseInt(select2.options[select2.selectedIndex].value);
    } else if (select.options[select.selectedIndex].value == articleCategory[1].id) {
        newArticle.type = parseInt(select2.options[select2.selectedIndex].value);
    }else{
        newArticle.type = select2.options[select2.selectedIndex].value;
    }

    newArticle.description = opis;

    if (imaNaStanju) {
        newArticle.stanje = true;
    } else {
        newArticle.stanje = false;
    }

    newArticle.image = urlAdresa;
    article.push(newArticle);

    for (var i = 0; i < article.length; i++) {
        article[i].RacunSaPDV = pricePDV(article[i].price, maloprodajaPDV, veleprodajaPDV);
    }

    if (!productName || !maloprodajnaCena || !veleprodajnaCena || !opis || !urlAdresa) {
        alert('Niste uneli sve podatke');
        return false;
    }else {
        ispisArtikla.innerHTML = '';
        for(var i =0;i<article.length;i++){
            for(var j =0;j<articleCategory.length;j++){
                for(var k=0;k<articleCategory[j].podcategory.length;k++) {
                    if(article[i].type == articleCategory[j].podcategory[k].id){
                        writeElement(i,j,k);
                    }
                }
            }
        }
    }
    console.log(article);
}

function addCategoryItem() {
    var select = document.getElementById('select');
    for (var i = 0; i < articleCategory.length; i++) {
        var el = document.createElement('option');
        el.textContent = articleCategory[i].name;
        el.value = articleCategory[i].id;
        select.appendChild(el);
    }
}
function addPodCategoryItem() {
    var select2 = document.getElementById('select2');
    var select = document.getElementById('select');
    if (select.options[select.selectedIndex].value == articleCategory[0].id) {
        select2.innerHTML = '';
        for (var j = 0; j < articleCategory[0].podcategory.length; j++) {
            var el = document.createElement('option');
            el.textContent = articleCategory[0].podcategory[j].name;
            el.value = articleCategory[0].podcategory[j].id;
            select2.appendChild(el);
        }
    } else if (select.options[select.selectedIndex].value == articleCategory[1].id) {
        select2.innerHTML = '';
        for (var j = 0; j < articleCategory[1].podcategory.length; j++) {
            var el = document.createElement('option');
            el.textContent = articleCategory[1].podcategory[j].name;
            el.value = articleCategory[1].podcategory[j].id;
            select2.appendChild(el);
        }
    } else {
        select2.innerHTML = '';
        for (var j = 0; j < articleCategory[2].podcategory.length; j++) {
            var el = document.createElement('option');
            el.textContent = articleCategory[2].podcategory[j].name;
            el.value = articleCategory[2].podcategory[j].id;
            select2.appendChild(el);
        }
    }
}
var select3 = document.getElementById('select3');
for (var i = 0; i < articleCategory.length; i++) {
    var el = document.createElement('option');
    el.textContent = articleCategory[i].name;
    el.value = articleCategory[i].id;
    select3.appendChild(el);
}


function addNewPodCategory(){
        var podkategorija = document.getElementById('podCategoryName').value;
        var select3 = document.getElementById('select3');
        if(select3.selectedIndex==1){
            //promeni deo koda iznad
            var newPodCategory = new Object();
            newPodCategory.id = articleCategory[0].podcategory[(articleCategory[0].podcategory.length) - 1].id + 1;
            newPodCategory.name = podkategorija;
            articleCategory[0].podcategory.push(newPodCategory);
        }
        else if(select3.selectedIndex==2) {
            //promeni deo koda iznad
            var newPodCategory = new Object();
            newPodCategory.id = articleCategory[1].podcategory[(articleCategory[1].podcategory.length) - 1].id + 1;
            newPodCategory.name = podkategorija;
            articleCategory[1].podcategory.push(newPodCategory);
        }else if(select3.selectedIndex==3) {
            //promeni deo koda iznad
            var newPodCategory = new Object();
            newPodCategory.id = Math.floor(Math.random() * (10000 - 2000) + 2000);
            newPodCategory.name = podkategorija;
            articleCategory[2].podcategory.push(newPodCategory);
        }

        console.log(articleCategory);
}

function dodajNovuKategoriju(){
    var kategorija = document.getElementById('categoryName').value;
    var newCategory = new Object();
    newCategory.id = articleCategory[(articleCategory.length) - 1].id + 1;
    newCategory.name = kategorija;
    newCategory.podcategory = [];
    articleCategory.push(newCategory);
    console.log(articleCategory);
    var select3 = document.getElementById('select3');
    var select = document.getElementById('select');
    var el2 = document.createElement('option');
    var el = document.createElement('option');
    el2.textContent = newCategory.name;
    el.textContent = newCategory.name;
    el.value = newCategory.value;
    el2.value = newCategory.value;
    select3.appendChild(el);
    select.appendChild(el2);
}

function verification(){
    var max_chars = 250;
    var max_chars_name = 30;
    var opis = document.getElementById('opis');
    var productName = document.getElementById('productName');

    if(opis.value.length > max_chars) {
        opis.value = opis.value.substr(0, max_chars);
    }
    if(productName.value.length > max_chars_name){
        productName.value = productName.value.substr(0,max_chars_name);
    }
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}