function CalcularNS() {
    var salario = Number(document.getElementById("valSalario").value);
    var porcAum = Number(document.getElementById("percAum").value);
    var porcent = porcAum / 100;
    var NovoSal = salario * (1 + porcent);
    document.querySelector('#NovoS').innerHTML = `O Novo salário é ${NovoSal}`;
}

function CalcularT() {
    var base = Number(document.getElementById("baseT").value);
    var altura = Number(document.getElementById("alturaT").value);
    var areaT = (base * altura) / 2;
    document.querySelector("#area").value = `A área do triângulo é ${areaT}`;
}

function CalcularNota() {
    var notaUm = Number(document.getElementById("n1").value);
    var notaDois = Number(document.getElementById("n2").value);
    var mediaNotas = (((notaUm) * 0.3) + ((notaDois) * 0.7));
    document.getElementById("media").innerHTML = mediaNotas
}

function CalcularanoNasc() {
    var anoNascimento = Number(document.getElementById("anoNasc").value);
    var dataAtual = new Date();
    var dataAno = dataAtual.getFullYear();
    var anoConv = dataAno - anoNascimento;
    const anoCinquent = 2050;
    var anoCinquenta = (anoCinquent - anoNascimento);
    document.getElementById("anoNascimento").innerHTML = `${anoConv} anos`
    document.getElementById("anoNascimentocinq").innerHTML = `${anoCinquenta} anos`
}

function CalcularCM() {
    var dist = Number(document.getElementById("distancia").value);
    var volumeL = Number(document.getElementById("volume").value);
    var cM = dist / volumeL
    document.querySelector('#ConsumoM').innerHTML = `${cM} KM/L`
}


function calcular() {
    const qtdH = 62; /* const tem que ter valor definido, é aquela que não muda */
    var qtdRef = Number(document.getElementById("qtdRef").value);
    var vh = Number(document.querySelector('#valH').value); /* para id definidos, em querySelector precisar ter # */
    var qtdHE = qtdH - 40; /* Quando a variável está cinza, ela não foi usada */
    console.log(qtdHE);
    const valRef = 1.50;
    var totalRef = valRef * qtdRef;
    var totalHN = 40 * vh;
    var totalHE = qtdHE * vh * 3;
    var salario = totalHN + totalHE - totalRef;
    document.querySelector('#SalF').innerHTML = `O salário é R$ ${salario},00 Reais`; /* Quando quero usar texto + variável, utilizo crase `` */
}

function EscolherN() {
    var resp = document.getElementById('numGerado');
    resp.innerHTML = (Math.floor(Math.random() * 100)) + 1;
    if (resp.innerHTML % 2 == 0) {
        document.getElementById('numPI').innerHTML = `${resp.innerHTML} é par`
    } else {
        document.getElementById('numPI').innerHTML = `${resp.innerHTML} é ímpar`
    }

}

