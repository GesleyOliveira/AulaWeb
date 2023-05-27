function desligar(){
    document.getElementById("lampada").setAttribute("src", "img/luzDesligada.gif")
}

function ligar(){
    document.getElementById("lampada").setAttribute("src", "img/luzLigada.gif")
}

function sumir(){
    document.getElementById("lampada").style.visibility="hidden"
}

function aparecer(){
    document.getElementById("lampada").style.visibility="visible"
}

function trocar(){
    
var img= document.getElementById("lampada")

    if (img.getAttribute.src ==  "img/luzDesligada.gif")
        img.setAttribute("src", "img/luzLigada.gif")
    if (img.getAttribute.src ==  "img/luzLigada.gif")
        img.setAttribute("src", "img/luzDesligada.gif")

}