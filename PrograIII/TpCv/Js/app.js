//Menu Lateral
var menu_visible = false;
let menu = document.getElementById("nav")

function mostrarMenu(){
    if(menu_visible==false){
        menu.style.display= "block";
        menu_visible=true;
    }
    else{
        menu.style.display= "none";
        menu_visible = false;
    }
}

//Oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a")
for(var x=0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible=false;
    }
}

//Animacion de barritas en las habilidades
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let csharp = document.getElementById("CSHARP");
crearBarra(csharp);
let sql = document.getElementById("SQL");
crearBarra(sql);
let poo = document.getElementById("POO");
crearBarra(poo);
let java = document.getElementById("java");
crearBarra(java);
let excell = document.getElementById("excell");
crearBarra(excell);
let blandas = document.getElementById("blandas");
crearBarra(blandas);

//Aca guardo la cant de barritas que se van a ir pintando x cada barra
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
let bandera = false;

//esta funcion aplica las animacion de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades")
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top
    if(distancia_skills>=300 && bandera == false){
        bandera=true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 9, 0, intervalHtml);
        },100);
        const intervalJs = setInterval(function(){
            pintarBarra(javascript, 7, 1, intervalJs);
        },100);
        const intervalCsharp = setInterval(function(){
            pintarBarra(csharp, 10, 2, intervalCsharp);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 14, 3, intervalSql);
        },100);
        const intervalPoo = setInterval(function(){
            pintarBarra(poo, 15, 4, intervalPoo);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 8, 5, intervalJava);
        },100);
        const intervalExcell = setInterval(function(){
            pintarBarra(excell, 11, 6, intervalSql);
        },100);
        const intervalBlandas = setInterval(function(){
            pintarBarra(blandas, 16, 7, intervalBlandas);
        },100);
    }
}

function pintarBarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x<cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}