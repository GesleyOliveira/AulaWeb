
function Calcular(){
    var somaad = 0
    var adic = document.querySelectorAll("input[name='adicionais']:checked")
        for(var i=0; i < adic.length; i++){
            somaad += Number(adic[i].value)
        }
    
var lanche = Number(document.querySelector("input[name='promo']:checked").value);
var qtd = Number(document.getElementById("qtd").value);

if (qtd<=2){
    desconto = 5
}

else{
    desconto = 10
}

var tot = (lanche * qtd) + somaad;
var desconto = (tot * desconto) / 100;
var total = tot - desconto


document.querySelector("#tot").innerHTML = `Total: R$ ${tot}`;
document.querySelector("#desconto").innerHTML = `Desconto: R$ ${desconto}`;
document.querySelector("#total").innerHTML = `Total com Desconto: R$ ${total}`;
}



