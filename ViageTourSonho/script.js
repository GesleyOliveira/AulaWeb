function imprimir(){
    if(document.getElementById("nome").value ==""){
        var n = window.prompt("Informe o seu nome")
        document.getElementById("nome").value = n
        }
window.print()
}

function limpar(){
    if (window.confirm("Tem certeza?"))
        document.querySelector('#formulario').reset()    

}

function relogio() {
    var hora = new Date()
    document.getElementById('hora').innerText = 
    `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
}

setInterval(relogio, 1000)

function orcar(){
    var somaad = 0
    var adic = document.querySelectorAll("input[name='adicionais']:checked")
        for(var i=0; i < adic.length; i++){
            somaad += Number(adic[i].value)
        }
        
    var dest = Number(document.getElementById('destino').value)
    var guia = Number(document.querySelector("input[name='guia']:checked").value)

    var total = somaad + dest + guia

    document.getElementById("total").innerHTML = total
}

    
