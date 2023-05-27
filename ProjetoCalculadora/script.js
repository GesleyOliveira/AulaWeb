function somar(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    let s = n1 + n2
    document.getElementById("r").innerHTML = s
}

function subtrair(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    let sub = (n1) - (n2)
    document.getElementById("r").innerHTML = sub
}

function dividir(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    let d = (n1) / (n2)
    document.getElementById("r").innerHTML = d
}

function multiplicar(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    let m = (n1) * (n2)
    document.getElementById("r").innerHTML = m
}



