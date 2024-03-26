var botaoAbrir = document.getElementById("botaoabrir")
var botaoFechar = document.getElementById("botaofechar")
var botaoClaro = document.getElementById("claro")
var botaoEscuro = document.getElementById("escuro")
botaoClaro.addEventListener("click", claro)
botaoEscuro.addEventListener("click", escuro)
botaoAbrir.addEventListener("click", abrir)
botaoFechar.addEventListener("click",fechar)

function abrir(event){
    document.getElementById("card-nav").style.display = "flex"

}
function fechar(event){
    document.getElementById("card-nav").style.display = "none"
}

function escuro(event){
    document.getElementById("principal").style.backgroundColor= "#14111c"
    document.getElementById("textop").style.color="#fff"
    document.getElementById("texto").style.color="#fff"
}

function claro(event){
    document.getElementById("principal").style.backgroundColor= "#fff"
    document.getElementById("textop").style.color="#000"
    document.getElementById("texto").style.color="#000"
}