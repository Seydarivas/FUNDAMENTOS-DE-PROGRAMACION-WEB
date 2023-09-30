var menu_visible = false;
let menu = documen.getElementById("nav");
function mostrarOcultarMenu(){
    if ( menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display="none" ;  //oculto el menú
        menu_visible=false;
    }
}
//ocultar menu
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length;x++){
    links[x].onclick = function (){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for ( i = 0; i <= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = documen.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let java = document.getElementById("java");
crearBarra(photoshop);
let csharp = document.getElementById("c++");
crearBarra(c++);

let contadores = [-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
     var habilidades = document.getElementById("habilidades");
     var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
     if ( distancia_skills>=300 && entro == false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 11, 2, intervalPython);
        }, 100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 15, 3, intervalJava);
        }, 100);
        const intervalCsharp = setInterval(function(){
            pintarBarra(c++, 16, 4, intervalc++);
        }, 100);
     }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if ( x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }
    else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}