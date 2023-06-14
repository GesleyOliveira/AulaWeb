
function Calcular(){
    var somaad = 0
    var adic = document.querySelectorAll("input[name='adicionais']:checked")
        for(var i=0; i < adic.length; i++){
            somaad += Number(adic[i].value)
        }
    
var lanche = Number(document.querySelector("input[name='promo']:checked").value);
var qtd = Number(document.getElementById("qtd").value);

var tot = (lanche * qtd) + adic;

document.querySelector("#tot").innerHTML = `Total: ${tot}`;
}



